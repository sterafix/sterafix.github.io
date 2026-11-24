import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  links: Record<string, string>
}

export default ((opts: Options) => {
  const NavLinks: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)
    return (
      <nav class={classNames(displayClass, "nav-links")}>
        {Object.entries(opts.links).map(([text, path]) => (
          <a href={`${baseDir}/${path}`} class="internal">
            {text}
          </a>
        ))}
      </nav>
    )
  }

  NavLinks.css = `
.nav-links {
  display: flex;
  gap: 1.25rem;
  margin-left: auto;
}
`

  return NavLinks
}) satisfies QuartzComponentConstructor<Options>
