import { cn } from "@/lib/utils";

export type TypographyH1Props = React.ComponentProps<"h1">;
export type TypographyH2Props = React.ComponentProps<"h2">;
export type TypographyH3Props = React.ComponentProps<"h3">;
export type TypographyH4Props = React.ComponentProps<"h4">;
export type TypographyParagraphProps = React.ComponentProps<"p">;
export type BlackQuotesProps = React.ComponentProps<"blockquote">;
export type TypogpraphyLeadProps = React.ComponentProps<"p">;
export type TypogpraphyLargeProps = React.ComponentProps<"div">;
export type TypogpraphySmallProps = React.ComponentProps<"small">;
export type TypogpraphyMutedProps = React.ComponentProps<"p">;

export function TypographyMuted({
  className,
  children,
  ...props
}: TypogpraphyMutedProps) {
  return (
    <p {...props} className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function TypographySmall({
  className,
  children,
  ...props
}: TypogpraphySmallProps) {
  return (
    <small
      {...props}
      className={cn("text-xs font-medium leading-none", className)}
    >
      {children}
    </small>
  );
}

export function TypographyLarge({
  className,
  children,
  ...props
}: TypogpraphyLargeProps) {
  return (
    <div {...props} className={cn("text-lg font-semibold", className)}>
      {children}
    </div>
  );
}

export function TypographyLead({
  className,
  children,
  ...props
}: TypogpraphyLeadProps) {
  return (
    <p {...props} className={cn("text-xl text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function TypographyH1({
  className,
  children,
  ...props
}: TypographyH1Props) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  className,
  children,
  ...props
}: TypographyH2Props) {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  className,
  children,
  ...props
}: TypographyH3Props) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  className,
  children,
  ...props
}: TypographyH4Props) {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  className,
  children,
  ...props
}: TypographyParagraphProps) {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  className,
  children,
  ...props
}: BlackQuotesProps) {
  return (
    <blockquote
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
}
