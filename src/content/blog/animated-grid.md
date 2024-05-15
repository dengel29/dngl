---
title: Animating Grids
date: '2024-04-25'
indexAlt: ""
---

> tl;dr Inspired by iPad music app NEON, I got curious about how to make HTML and CSS grids with similar behavior to its growing, shrinking, squishing user interface. If you're more interested in the code, here's [a Codepen](https://codepen.io/dengel29/pen/VwNggzz) with a simple example, and I'll scatter some visuals throughout the article.

## Neon UI

I recently have gone down the rabbit hole of iPad music apps. One thing you'll notice once you see a few of these apps is just how impressive the design can be. They're often chock fully of functionality, have various modalities, and need to display a ton of information all at once. Some obviously do this better than others, but even the flawed ones are really inspiring or weird, and that's inspiring in its own way!

### What I like about Neon's UI

Neon is striking with its dichromatic color scheme and big chunky font. I can imagine the design is a bit divisive, but this isn't a review of the app.

<video muted loop controls controlslist="nofullscreen" src="https://d2opfsmmrbhnsw.cloudfront.net/animated-grid/neon-demo.mp4" alt="A video of the expanding and shrinking rows and columns in Neon's UI, played at 2x speed"></video>


What I like is the way the UI warps depending on which menus are open. They can all be open at once without obscuring each other, and when they're not being used they tuck away.

And because everything grows or shrinks, elements on the screen don't jump around, making it easier to keep track of where something has gone.

I recall several years ago hearing Rich Harris say how important he thought transition animations were to user understanding of UI interactions, and I think Neon is a great example of that principle in action.

## Inspired to animate grids

While playing around with Neon and admiring how fun it was to interface with, I was reminded of a demo by the Google DevRel team I saw years ago of an [animated Mondrian with CSS grid](https://web.dev/articles/css-animated-grid-layouts). As a layout tool, CSS grid is already amazing. I got excited to take my understanding of CSS grid to another level by learning how to animate it.

## Let's build the thing

I looked back at the Mondrian demo and noticed a few things about the CSS provided.
> Grid layouts can smoothly transition between states.. [by interpolating] `grid-template-columns` and `grid-template-rows` values.  

This explained why some earlier attempts I made at animating the grid **items** with `grid-row` / `grid-column` did not work: we must be animating the grid **container**, and only those two properties mentioned above.

<details><summary>Some other things that didn't work</summary> 

   On the topic of things that didn't work: you can't use [`repeat()`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat) in your `grid-template-rows`/`columns` declaration – each column and row's size must be specified individually.

  You also can't just set a variable in your initial ruleset for the grid, then interpolate that value to get the animation to work: you must set the values of the two properties in the animation or transition.

  You will also experience issues if you use `repeat()` in your `grid-template-*` declaration in the `@keyframes` animation. I wrote a bit about that further down.
</div>
</div>
</details>

## The key to a nice-looking animated grid

One thing I took for granted is that when a row or column shrinks or grows, if the other rows and columns don't also change in size accordingly, the **entire grid** will change. For some cases this might be fine, but the reason the animated Mondrian looks good is because the grid container is always the same width and height, and only the cells within it are shrinking or growing.

## Setting up our grid and variables with `calc()`

`calc()` makes this really easy to do this. I won't re-write all the code here, but I'll give a brief explanation of the math behind it.

Save the maximum width and heights of your intended grid into CSS variables, I called mine `--max-h` and `--max-w`. So something like the following:

```css
.grid { 
  --max-h: 700px; 
  --max-w: 600px
}
``` 

It's also useful to have your total rows and columns stored in variables, for a few reasons: removing or adding columns creates jank in the animation, and the total rows/columns is critical info for calculating how big or small they should become.

Now if you want evenly sized cells, we can just divide the `--max-h` by `--total-rows`. Then apply that size in your definition of the `grid-template-rows` rule. Grid's `repeat` syntax can help you here, like this:
```css
.grid {
    --max-h: 700px;
    --total-rows: 3;
    --row-size: calc(--max-h / --total-rows);
    grid-template-rows: repeat(
      var(--total-rows), var(--row-size)
    )
}
```

Be aware: we **can** use `repeat()` here in the initial declaration, but the animation will become jerky if you use it in the `@keyframes` block.

## Acheiving consistent grid size with `calc()`

<video muted loop controls controlslist="nofullscreen" src="https://d2opfsmmrbhnsw.cloudfront.net/animated-grid/grid-moving.mp4" alt="A simple animated grid with growing and shrinking rows"></video>

If a cell inside grows, at least one other cell will need to shrink so we don't grow larger than our original grid.

Let's just figure out the rows' grow and shrink sizes, since we can use the same principles to figure out columns later. We only need to decide two more things:

1. how many rows are shrinking
2. how small should they be

After deciding, we use `calc()` to figure out how big the large ones should grow. Here's just that CSS

```css
@keyframes simple-example {
  to {
    /* --rows-sm: how many rows will shrink */
    --rows-sm: 2;
    /* --rows-lg: how many grows will grow */
    --rows-lg: calc(var(--total-rows) - var(--rows-sm));
    /* the size we want rows to shrink to */
    --sm-row-size: 2vmin;
    /* the size we want rows to grow to */
    --lg-row-size: calc((var(--max-h) - (var(--sm-row-size) * var(--rows-sm))) / var(--rows-lg));
    /* final step is manually setting which rows grow and which ones shrink */
    /* rows 1 and 3 shrink, and row 2 grows */
    grid-template-rows: var(--sm-row-size) var(--lg-row-size) var(--sm-row-size);
  }
}
```
All the shrunken rows will be the same size, as will all the rows that grow. That helps simplify the calculation considerably.

All that math gets us the values of how big rows will grow and shrink. The only thing left to do is put them in the `grid-template-*` declarations, where you decide which rows are going to grow and which ones will shrink.

<details><summary>Be careful to avoid pitfalls at this stage</summary>

For the effect to work, you keep consistent the number of rows/columns you originally set, as well as a number of shrunken/grown rows. 

If the cells of the grid start jumping around, you know you got the number of rows or columns wrong. If the grid container is getting bigger or smaller at certain steps of the animation, you know you grew or shrunk too many. 

Even if all the calculations are good, you can get this wrong so pay attention while setting these.
</details>
<br>

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="VwNggzz" data-preview="true" data-editable="true" data-user="dengel29" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dengel29/pen/VwNggzz">
  Simple Grid Animation Example</a> by Dan (<a href="https://codepen.io/dengel29">@dengel29</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

This is a very simple example where I tried to limit the complexity, but you can take these ideas and run with them in some interesting directions. You can use CSS animations or transitions to animate between states, so we can trigger these in different ways, with :hover or checkboxes which is how I imagine I'd go about re-creating the Neon UI, with its buttons that trigger its various menus.

Anyways, go make some squishy bouncy weird UIs. Or grid art. It's good for you.

 