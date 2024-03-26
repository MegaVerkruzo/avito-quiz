export const HtmlTextBlock = ({ html }: { html: string }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
