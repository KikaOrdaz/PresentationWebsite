type TypographyProps = {
  text: string
}

export function TypographyH1({text}: TypographyProps) {
  return (
    <h1 className="text-[#334155] scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {text}
    </h1>
  )
}

export function TypographyH2({text}: TypographyProps) {
  return (
    <h2 className="text-[#334155] scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  )
}

export function TypographyH3({text}: TypographyProps) {
  return (
    <h3 className="text-[#334155] scroll-m-20 text-2xl font-semibold tracking-tight">
        {text}
    </h3>
  )
}

export function TypographyH4({text}: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {text}
    </h4>
  )
}

export function TypographyP({text}: TypographyProps) {
  /* return (
    <p className="text-[#334155] leading-7 [&:not(:first-child)]:mt-6">
        {text}
    </p>
  ) */
  return (
    <p className="text-[#334155] leading-7">
        {text}
    </p>
  )
}

// Quotes are defined as '&quot;'
export function TypographyBlockquote({text}: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
        {text}
    </blockquote>
  )
}

export function TypographyTable() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King's Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People's happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  )
}

export function TypographyInlineCode({text}: TypographyProps) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {text}
    </code>
  )
}

export function TypographyLead1({text}: TypographyProps) {
  return (
    <p className="text-[#0F172A] text-left text-xl">
        {text}
    </p>
  )
}
// text-muted-foreground
//className="text-[#0F172A]"

export function TypographyLead2({text}: TypographyProps) {
  return (
    <p className="text-[#0F172A] text-xl">
        {text}
    </p>
  )
}


export function TypographyLarge({text}: TypographyProps) {
  return <div className="text-lg font-semibold">{text}</div>
}

export function TypographySmall({text}: TypographyProps) {
  return (
    <small className="text-sm leading-none font-medium">{text}</small>
  )
}


export function TypographyMuted({text}: TypographyProps) {
  return (
    <p className="text-muted-foreground text-sm">{text}</p>
  )
}
