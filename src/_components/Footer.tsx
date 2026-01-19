import { SocialLinkProps } from "./SocialLink.tsx";

export default ({ links, comp }: Lume.Data) => (
  <footer id="nav-footer" class="page-footer">
    <div class="row">
      <div id="social" class="social">
        <ul>
          {links.map((link: SocialLinkProps) => (
            <li>
              <comp.SocialLink {...link} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);
