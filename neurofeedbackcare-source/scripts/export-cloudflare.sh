#!/usr/bin/env sh
# Build Cloudflare Pages output and package dist + full source for download.
set -eu
cd /workspace
echo "Building for Cloudflare Pages..."
DEPLOY_TARGET=cloudflare npx vite build
mkdir -p /workspace/exports

OUT_DIST_ZIP="/workspace/exports/neurofeedbackcare-cloudflare-pages.zip"
OUT_DIST_TAR="/workspace/exports/neurofeedbackcare-cloudflare-pages.tar.gz"
OUT_SRC_ZIP="/workspace/exports/neurofeedbackcare-source.zip"
rm -f "$OUT_DIST_ZIP" "$OUT_DIST_TAR" "$OUT_SRC_ZIP"

python3 - <<'PY'
import zipfile, tarfile, os
from pathlib import Path

root = Path("/workspace")
dist = root / "dist"
exports = root / "exports"
exports.mkdir(exist_ok=True)

# --- dist zip (upload-ready: archive root = dist contents) ---
out_dist = exports / "neurofeedbackcare-cloudflare-pages.zip"
with zipfile.ZipFile(out_dist, "w", zipfile.ZIP_DEFLATED) as z:
    for dirpath, _, files in os.walk(dist):
        for f in files:
            p = Path(dirpath) / f
            z.write(p, str(p.relative_to(dist)))
print("wrote", out_dist, out_dist.stat().st_size, "bytes")

out_tar = exports / "neurofeedbackcare-cloudflare-pages.tar.gz"
with tarfile.open(out_tar, "w:gz") as t:
    t.add(dist, arcname=".")
print("wrote", out_tar, out_tar.stat().st_size, "bytes")

# --- full source zip (Git-ready; no node_modules/dist) ---
exclude_dirs = {
    "node_modules", "dist", ".tanstack", ".vercel", ".wrangler",
    "exports", "screenshots", "attachments", "migrations",
    ".git", "__pycache__",
}
exclude_names = {".node_modules.lock"}

def skip(rel: Path) -> bool:
    if any(p in exclude_dirs for p in rel.parts):
        return True
    if rel.name in exclude_names:
        return True
    if rel.parent == Path(".") and rel.suffix == ".png":
        return True  # root QA screenshots
    return False

out_src = exports / "neurofeedbackcare-source.zip"
n = 0
with zipfile.ZipFile(out_src, "w", zipfile.ZIP_DEFLATED) as z:
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [
            d for d in dirnames
            if d not in exclude_dirs
            and (not d.startswith(".") or d == ".grok")
        ]
        for f in filenames:
            p = Path(dirpath) / f
            rel = p.relative_to(root)
            if skip(rel):
                continue
            z.write(p, str(rel))
            n += 1
print("wrote", out_src, n, "files", out_src.stat().st_size, "bytes")
PY

echo "Export ready:"
ls -lh /workspace/exports/neurofeedbackcare-*.zip /workspace/exports/neurofeedbackcare-*.tar.gz
