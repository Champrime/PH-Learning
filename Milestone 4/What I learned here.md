# 📚 What I Learned Here

## 1. `getElementsByClassName` vs `querySelectorAll`

| Feature | `getElementsByClassName` | `querySelectorAll` |
|---|---|---|
| Returns | Live `HTMLCollection` | Static `NodeList` |
| Selector | Class names only | Any CSS selector |
| `.forEach` | ❌ (needs `Array.from()`) | ✅ Works directly |
| Performance | Slightly faster | Slightly slower |
| Auto-updates with DOM | ✅ Yes | ❌ No |

**Takeaway:** Use `querySelectorAll` most of the time for flexibility. Use `getElementsByClassName` when you need a live collection.

---

## 2. CSS `clamp()` — Responsive Values

### Syntax
```css
clamp(minimum, preferred, maximum)
```

### Rules
- ❌ **No space** before `(` → `clamp(...)` not `clamp (...)`
- The **middle value** should use fluid units (`vw`, `%`) to actually scale

### Formula for Fluid Scaling Between Two Breakpoints

Given:
- `minFont` at `minWidth`
- `maxFont` at `maxWidth`

$$m = \frac{maxFont - minFont}{maxWidth - minWidth} \times 100 \quad (vw)$$

$$b = minFont - \frac{maxFont - minFont}{maxWidth - minWidth} \times minWidth \quad (px)$$

**Result:** `clamp(minFont, m·vw + b, maxFont)`

### Example: 8px → 16px between sm (640px) and 2xl (1536px)
```css
font-size: clamp(8px, 0.89vw + 2.29px, 16px);
```

---

## 3. `rem` vs `body` Font Size

- **`rem`** is relative to the **`<html>`** element, NOT `<body>`
- Tailwind uses `rem` for its font sizes (`text-sm`, `text-base`, etc.)
- ❌ Setting `font-size` on `body` won't affect `rem`-based sizes
- ✅ Set it on `html` for Tailwind compatibility:
```css
html {
    font-size: clamp(8px, 0.89vw + 2.29px, 16px);
}
```

---

## 4. Semantic HTML — `<output>` Tag

For search result counts like "8 Jobs found":
```html
<output>8 Jobs</output>
```
- Semantically means "result of a user action" — perfect for search results
- Alternatives: `<p>`, `<span>`, `<small>` (less semantic)

---

## 5. CSS Transitions & Animation

### `transition` Property
```css
transition: <property> <duration> <timing-function> <delay>;
```
- You can list **multiple properties** separated by commas
- The transition is defined on the **base state** (not `:hover`)
- On mouse leave, it plays in **reverse** automatically

### Timing Functions
| Function | Behavior |
|---|---|
| `ease` | Slow → fast → slow (default) |
| `ease-in` | Starts slow, ends fast |
| `ease-out` | Starts fast, ends slow (natural closing) |
| `ease-in-out` | Slow on both ends |
| `cubic-bezier(x1,y1,x2,y2)` | Custom curve |

### `max-height` Hack (for expand/collapse)
- CSS **cannot animate** `height: auto`
- Use `max-height` with a large value instead
- ⚠️ Flaw: closing animation feels delayed if `max-height` >> actual content height
- Modern fix: `interpolate-size: allow-keywords` (Chrome 129+, Firefox 131+)

### `transform` — GPU Accelerated
- More performant than animating `width`/`height`
- Common: `scale()`, `translateY()`, `rotate()`, `opacity`
- `transform: scale(1.01)` → subtle zoom, makes elements feel alive

### `will-change`
```css
will-change: max-height, transform;
```
- Hints the browser to prepare for animation → smoother performance
- Use **sparingly** — only on elements that actually animate

### `box-shadow` on Hover
- Adds depth — element feels like it's lifting off the page
- Combine with `transform: translateY(-4px)` for a "floating" effect

### Transition Delays — Layered Animations
```css
transition:
    max-height  400ms ease-in-out,
    background  300ms ease-in-out 100ms;  /* 100ms delay */
```
- The background **waits** for the height to start first
- Creates a polished, layered feel

### 🧪 Experiments to Try
| Change | Effect |
|---|---|
| `400ms` → `150ms` | Snappy fast animation |
| `400ms` → `1000ms` | Slow, dramatic reveal |
| `ease-in-out` → `ease-out` | Faster start, soft landing |
| `scale(1.01)` → `scale(1.05)` | More dramatic zoom |
| Delay `100ms` → `0ms` | Everything starts together |
| Add `translateY(-4px)` | Card "lifts up" on hover |

---

## 6. `cubic-bezier` — Animation Speed Curve

### Syntax
```css
cubic-bezier(x1, y1, x2, y2)
```

- **X-axis** = Time (0 = start, 1 = end)
- **Y-axis** = Progress (0 = start position, 1 = end position)
- Two control points act like **magnets** pulling the curve:
  - `(x1, y1)` shapes the **start** of the animation
  - `(x2, y2)` shapes the **end** of the animation

### Rules
- `x1` and `x2` must be **0–1** (time can't go backward)
- `y1` and `y2` can be **any number** (values outside 0–1 create bounce/overshoot)

### Built-in Presets Are Just cubic-beziers
| Keyword | cubic-bezier | Feels like |
|---|---|---|
| `linear` | `(0, 0, 1, 1)` | Constant speed |
| `ease` | `(0.25, 0.1, 0.25, 1)` | Gentle start & stop |
| `ease-in` | `(0.42, 0, 1, 1)` | Slow start, fast finish |
| `ease-out` | `(0, 0, 0.58, 1)` | Fast start, soft stop |
| `ease-in-out` | `(0.42, 0, 0.58, 1)` | Slow, fast, slow |

### Useful Custom Curves
```css
cubic-bezier(0.4, 0, 0.2, 1)        /* Material Design standard */
cubic-bezier(0.68, -0.55, 0.27, 1.55) /* Bouncy / playful */
cubic-bezier(0.16, 1, 0.3, 1)        /* Dramatic entrance */
```

**Tool:** Use [cubic-bezier.com](https://cubic-bezier.com) to visually create curves.

---

## 7. Non-Animatable Properties

CSS can only transition properties with **intermediate values** (gradual steps between two states).

| Property | Animatable? | Why |
|---|---|---|
| `opacity` | ✅ | 0 → 0.1 → 0.2 → ... → 1 |
| `height` | ✅ | 0px → 1px → 2px → ... |
| `color` | ✅ | RGB values shift gradually |
| `overflow` | ❌ | `hidden` or `visible` — no in-between |
| `display` | ❌ | `none` or `block` — on/off switch |
| `position` | ❌ | No gradual steps |

**Workaround:** Use `transition-delay` to time the switch after an animation finishes.

---

## 8. `transform: scale()` Causes Blur

- `scale()` rasterizes the element (takes a bitmap), then stretches it
- Non-integer scales like `scale(1.01)` → pixels land between screen pixels → **sub-pixel blur**

### Fixes
- ✅ Use `translateY(-2px)` instead — no blur, same "lift" feel
- ✅ Add `backface-visibility: hidden` — forces cleaner render
- ✅ Rely on `box-shadow` alone for hover depth

---

## 9. `will-change` — Browser Performance Hint

```css
will-change: transform, box-shadow;
```

- Tells the browser to **create a separate GPU layer** in advance
- Allocates memory and skips recalculations → smoother 60fps
- Like calling a restaurant ahead: "I'm coming, prep my food!"

### Rules
- ✅ Use only on elements that **actually animate**
- ✅ List only the **specific properties** that change
- ❌ Never apply to `*` (everything) — wastes memory
- Each `will-change` = extra GPU layer = extra RAM usage

---

## 10. `overflow-y: scroll` vs `overflow-y: auto`

| Value | Behavior |
|---|---|
| `scroll` | **Always** shows scrollbar, even when content fits |
| `auto` | Shows scrollbar **only when content overflows** |
| `hidden` | Hides overflow, no scrollbar ever |

**Takeaway:** Use `auto` unless you specifically want the scrollbar always visible (e.g., to prevent layout shift).
