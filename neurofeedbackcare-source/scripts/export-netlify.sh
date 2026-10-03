#!/usr/bin/env sh
# Build Netlify output and package full source for GitHub (neurofeedbackcare-source).
set -eu
cd /workspace
echo "Building for Netlify..."
DEPLOY_TARGET=netlify npx vite build
mkdir -p /workspace/exports

OUT_SRC_ZIP="/workspace/exports/neurofeedbackcare-source-netlify.zip"
rm -f "$OUT_SRC_ZIP"

python3 - <<'PY'
import zipfile, os
from pathlib import Path

root = Path("/workspace")
exports = root / "exports"
exports.mkdir(exist_ok=True)

exclude_dirs = {
    "node_modules", "dist", ".tanstack", ".vercel", ".wrangler",
    ".netlify", "exports", "screenshots", "attachments", "migrations",
    ".git", "__pycache__",
}
exclude_names = {".node_modules.lock"}

def skip(rel: Path) -> bool:
    if any(p in exclude_dirs for p in rel.parts):
        return True
    if rel.name in exclude_names:
        return True
    if rel.parent == Path(".") and rel.suffix == ".png":
        return True
    return False

out_src = exports / "neurofeedbackcare-source-netlify.zip"
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
            # Zip as neurofeedbackcare-source/... for drop-in GitHub folder
            z.write(p, str(Path("neurofeedbackcare-source") / rel))
            n += 1
print("wrote", out_src, n, "files", out_src.stat().st_size, "bytes")
PY

echo "Export ready:"
ls -lh /workspace/exports/neurofeedbackcare-source-netlify.zip
