# GitBot review rules — TestBase

## Translations
- All customer-facing copy MUST use translation keys (`{{ 'products.product.add_to_cart' | t }}`).
  Hardcoded English strings in Liquid, JSON templates or JS are a P2, even when the
  changed lines look correct in isolation.

## Money
- Never render prices with `money_without_currency` in structured data or JSON-LD.
  Use the raw cents value so the output stays machine-readable.

## Naming
- New asset files must be kebab-case (`cart-drawer.js`, not `cartDrawer.js`).
