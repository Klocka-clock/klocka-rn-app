# Green Light Theme Design

## Goal

Replace Klocka's current light-theme brand palette with the green palette supplied in the design reference. Keep the existing dark theme visually unchanged. Apply the palette consistently across application screens and shared UI components.

## Approved palette

| Role | Color |
| --- | --- |
| Primary | `#1D9A4F` |
| Secondary | `#4A7C59` |
| Tertiary | `#B5C9B7` |
| Neutral | `#EBF5EE` |

These four values are the source colors. Additional shades needed for pressed, disabled, border, surface, and text roles should be derived from these colors while maintaining readable contrast. Semantic error and warning colors retain their existing meaning. Third-party identity colors, including Google and Facebook, remain brand colors.

## Theme behavior

- The light theme uses the new green palette for brand and neutral roles.
- The dark theme retains its current values and appearance.
- Theme-aware components continue to select colors through the existing theme selection mechanism.
- Light-only surfaces and palette-dependent illustrations or charts use green-derived colors rather than the previous Nordic palette.

## Color ownership

The palette should be represented through existing centralized theme mechanisms rather than introducing another styling system:

- `src/theme/tokens.ts` owns semantic theme values and named brand colors.
- `src/components/ui/gluestack-ui-provider/config.ts` supplies component-library color scales.
- `tailwind.config.js` exposes project color names used by NativeWind classes.
- `src/global.css` holds matching CSS variables.
- Screens, features, and shared components consume semantic tokens or named colors instead of embedding palette hex values.
- App launch or splash backgrounds that currently use the old light palette are updated for consistency.

The audit found direct palette colors across 21 files. Existing unrelated edits in the working tree must be preserved while making the color changes.

## Scope and exclusions

In scope: light-theme surfaces, text, borders, controls, navigation, buttons, illustrations, charts, and decorative accents that currently use the old brand palette.

Out of scope: redesigning layouts or behavior, changing typography or spacing, changing dark-theme colors, and recoloring third-party logos or semantic error and warning states.

## Acceptance criteria

1. Primary, secondary, tertiary, and neutral roles use the approved hex values in the light theme.
2. Light-theme screens and shared components no longer rely on old Nordic brand colors for equivalent UI roles.
3. Dark-theme values and appearance remain unchanged.
4. Google/Facebook brand colors and semantic error/warning colors remain intact.
5. Text and controls retain sufficient contrast against their light-theme surfaces.
6. Theme color definitions remain centralized and consistent across tokens, Gluestack, Tailwind, and CSS variables.

## Verification approach

Review the light and dark theme color definitions, search for remaining old palette literals in UI source, and inspect affected app screens in both themes. Confirm the type check still succeeds after implementation. No layout or functional changes are part of this work.
