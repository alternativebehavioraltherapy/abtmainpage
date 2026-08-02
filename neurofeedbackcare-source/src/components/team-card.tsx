import { cn } from "@/lib/utils";

export function TeamCard({
  name,
  credentials,
  role,
  rate,
  bio,
  imageSrc,
  className,
}: {
  name: string;
  credentials?: string;
  role?: string;
  rate?: string;
  bio: string;
  imageSrc?: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card",
        className,
      )}
    >
      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="h-28 w-28 shrink-0 rounded-2xl object-cover object-top shadow-sm"
            width={112}
            height={112}
          />
        ) : (
          <div
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-navy font-display text-2xl font-semibold text-white"
            aria-hidden
          >
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="font-display text-xl text-navy md:text-2xl">{name}</h3>
          {credentials && (
            <p className="mt-0.5 text-sm font-semibold text-green">{credentials}</p>
          )}
          {role && <p className="mt-1 text-sm text-muted">{role}</p>}
          {rate && (
            <p className="mt-3 inline-flex rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-navy">
              Per session: {rate}
            </p>
          )}
        </div>
      </div>
      <p className="flex-1 border-t border-border px-6 py-5 text-sm leading-relaxed text-muted">
        {bio}
      </p>
    </article>
  );
}
