import './index.css';

export function Heading(props) {
  const { level = 1, className = '', children } = props;
  const H_tag = `h${level}`;

  return (
    <H_tag className={className}>{children}</H_tag>
  );
}
