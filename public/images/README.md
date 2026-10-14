# Image assets

Place website images in this folder. They are served from the site root, so use them in components like this:

```tsx
import Image from "next/image";

<Image
  src="/images/team-photo.jpg"
  alt="Mudziyo Digital Solutions team"
  width={1200}
  height={800}
/>
```

Suggested organisation:

- `public/images/projects/` — portfolio and case-study images
- `public/images/team/` — staff and company photos
- `public/images/illustrations/` — decorative graphics

Use descriptive, lowercase filenames with hyphens, for example `victoria-falls-office.jpg`.
