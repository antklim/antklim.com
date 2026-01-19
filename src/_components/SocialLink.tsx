export interface SocialLinkProps {
  id: string; // social id like github, linkedin, ...
  text: string;
  url: string;
}

export default function SocialLink({ id, text, url }: SocialLinkProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <img src={`/img/${id}.svg`} alt={text} height="24" width="24" />
    </a>
  );
}
