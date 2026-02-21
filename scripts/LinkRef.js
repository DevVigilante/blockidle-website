import { jsx as _jsx } from "react/jsx-runtime";

export default function LinkRef({ name, pages }) {
  if (!name) return null;

  if (name.startsWith("#")) {
    const hash = name.substring(1);
    return _jsx("a", {
      name: `#${hash}`,
      children: hash
    });
  }

  const [className, hash] = name.split("#");

  const match = pages?.find(p =>
    p.endsWith(`${className}.html`)
  );

  if (!match) {
    return _jsx("span", {
      children: name
    });
  }

  const url = "/" + match + (hash ? `#${hash}` : "");

  return _jsx("a", {
    name: url,
    children: name
  });
}
