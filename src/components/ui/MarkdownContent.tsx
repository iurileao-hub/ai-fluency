"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FluencyPlanTemplate } from "./FluencyPlanTemplate";

interface MarkdownContentProps {
  content: string;
}

// Marker for custom components
const FLUENCY_PLAN_MARKER = "<!-- FLUENCY_PLAN_TEMPLATE -->";

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Check if content has the fluency plan marker
  if (content.includes(FLUENCY_PLAN_MARKER)) {
    const parts = content.split(FLUENCY_PLAN_MARKER);
    return (
      <div className="markdown-content">
        <MarkdownSection content={parts[0]} />
        <FluencyPlanTemplate />
        {parts[1] && <MarkdownSection content={parts[1]} />}
      </div>
    );
  }

  return (
    <div className="markdown-content">
      <MarkdownSection content={content} />
    </div>
  );
}

// Separated component for the actual markdown rendering
function MarkdownSection({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-star-white mb-6 mt-8 first:mt-0">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold text-guide-yellow mb-4 mt-8 pb-2 border-b border-nebula-blue/30">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-bold text-star-white mb-3 mt-6">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-bold text-star-white/90 mb-2 mt-4">
            {children}
          </h4>
        ),
        p: ({ children }) => (
          <p className="text-star-white/80 leading-relaxed mb-4">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-star-white/80">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 text-star-white/80">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="leading-relaxed">{children}</li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="bg-nebula-blue/20 border-l-4 border-guide-yellow rounded-r-lg p-5 my-6 text-star-white/90 italic">
            {children}
          </blockquote>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-star-white">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-star-white/90">{children}</em>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-guide-yellow hover:text-guide-yellow/80 underline underline-offset-2 transition-colors"
          >
            {children}
          </a>
        ),
        hr: () => (
          <hr className="border-nebula-blue/30 my-8" />
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-nebula-blue/20 rounded-lg overflow-hidden">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-nebula-blue/40">{children}</thead>
        ),
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => (
          <tr className="border-b border-nebula-blue/30 last:border-0">
            {children}
          </tr>
        ),
        th: ({ children }) => (
          <th className="text-left p-3 text-guide-yellow font-bold text-sm">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="p-3 text-star-white/80 text-sm">{children}</td>
        ),
        code: ({ className, children }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="bg-nebula-blue/40 text-guide-yellow px-1.5 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            );
          }
          return (
            <code className="block bg-space-blue-dark border border-nebula-blue/30 rounded-lg p-4 my-4 overflow-x-auto text-sm font-mono text-star-white/90">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="bg-space-blue-dark border border-nebula-blue/30 rounded-lg p-4 my-4 overflow-x-auto">
            {children}
          </pre>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
