import {
  Highlight,
  Prism,
  themes,
  type HighlightProps,
} from "prism-react-renderer";

import { CheckIcon, CopyIcon } from "lucide-react";

globalThis.Prism = Prism;
// @ts-expect-error This is untyped
void import("prismjs/components/prism-bash.min.js");
// @ts-expect-error This is untyped
void import("prismjs/components/prism-ruby.min.js");
// @ts-expect-error This is untyped
void import("prismjs/components/prism-markup.js");
// @ts-expect-error This is untyped
void import("prismjs/components/prism-json.min.js");
// @ts-expect-error This is untyped
void import("prismjs/components/prism-java.min.js");
// @ts-expect-error This is untyped
void import("prismjs/components/prism-csharp.min.js");
// @ts-expect-error This is untyped
void import("prismjs/components/prism-objectivec.min.js");
// @ts-expect-error This is untyped
void import("prismjs/components/prism-markdown.min.js");
// @ts-expect-error This is untyped
void import("prismjs/components/prism-javascript.min.js");
// @ts-expect-error This is untyped
void import("prismjs/components/prism-typescript.min.js");

import { useTheme } from "next-themes";
import { useState } from "react";
import { ClientOnly } from "../components/ClientOnly.js";
import { cn } from "../util/cn.js";

export type SyntaxHighlightProps = {
  className?: string;
  noBackground?: boolean;
  wrapLines?: boolean;
  showLanguageIndicator?: boolean;
  language?: string;
  title?: string;
  children?: string;
  code?: string;
  showCopy?: "hover" | "always" | "never";
  showCopyText?: boolean;
} & Omit<HighlightProps, "children" | "language">;

const remapLang = {
  mdx: "md",
} as Record<string, string>;

export const SyntaxHighlight = ({
  language = "plain",
  showCopy = "hover",
  showCopyText,
  title,
  children,
  ...props
}: SyntaxHighlightProps) => {
  const { resolvedTheme } = useTheme();
  const [isCopied, setIsCopied] = useState(false);

  const code = children ?? props.code;

  if (!code) {
    return null;
  }

  const highlightTheme =
    resolvedTheme === "dark" ? themes.vsDark : themes.github;

  // hardcoded values from the themes to avoid color flash in SSR
  const themeColorClasses =
    "bg-[#f6f8fa] text-[#393a34] dark:bg-[#1e1e1e] dark:text-[#9cdcfe]";

  return (
    <ClientOnly
      fallback={
        <div className="relative group">
          {title && (
            <div className="text-xs text-muted-foreground absolute top-2 font-mono border-b w-full pb-2 px-4 ">
              {title}
            </div>
          )}
          <pre
            className={cn(
              "relative scrollbar overflow-x-auto",
              props.className,
              props.noBackground ? "!bg-transparent" : themeColorClasses,
              props.wrapLines && "whitespace-pre-wrap break-words",
              title && "pt-10",
            )}
          >
            {code}
          </pre>
          {props.showLanguageIndicator && (
            <span className="absolute top-1.5 right-3 text-[11px] font-mono text-muted-foreground transition group-hover:opacity-0">
              {language}
            </span>
          )}
        </div>
      }
    >
      <Highlight
        theme={highlightTheme}
        language={remapLang[language] ?? language}
        {...props}
        code={code}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="relative group">
            {title && (
              <div className="text-xs text-muted-foreground absolute top-2 font-mono border-b w-full pb-2 px-4 ">
                {title}
              </div>
            )}
            <pre
              className={cn(
                "relative scrollbar overflow-x-auto",
                className,
                props.className,
                props.noBackground && "!bg-transparent",
                props.wrapLines && "whitespace-pre-wrap break-words",
                title && "pt-10",
              )}
              style={style}
            >
              {tokens.map((line, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
            {props.showLanguageIndicator && (
              <span className="absolute top-1.5 right-3 text-[11px] font-mono text-muted-foreground transition group-hover:opacity-0">
                {language}
              </span>
            )}
            {showCopy !== "never" && (
              <button
                type="button"
                aria-label="Copy code"
                title="Copy code"
                className={cn(
                  "absolute top-2 right-2 p-2  hover:outline hover:outline-border/75 dark:hover:outline-border rounded-md text-sm text-muted-foreground transition",
                  showCopy === "hover"
                    ? "opacity-0 group-hover:opacity-100 group-hover:bg-zinc-100 group-hover:dark:bg-zinc-700"
                    : "bg-zinc-100 dark:bg-zinc-700",
                  showCopyText && "flex gap-2 items-center font-medium",
                )}
                disabled={isCopied}
                onClick={() => {
                  setIsCopied(true);
                  void navigator.clipboard.writeText(
                    tokens
                      .map((l) => l.map(({ content }) => content).join(""))
                      .join("\n"),
                  );
                  setTimeout(() => setIsCopied(false), 2000);
                }}
              >
                {isCopied ? (
                  <CheckIcon
                    className="text-emerald-600"
                    size={16}
                    strokeWidth={2.5}
                    absoluteStrokeWidth
                  />
                ) : (
                  <CopyIcon size={16} />
                )}
                {showCopyText && "Copy"}
              </button>
            )}
          </div>
        )}
      </Highlight>
    </ClientOnly>
  );
};
