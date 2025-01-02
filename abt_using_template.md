# Minimal 11ty Starter

[reference repo](https://github.com/tomreinert/minimal-11ty-tailwind-starter)

## How To: Navigation

The top navigation is the only *feature* in this starter and lives in `/src/_includes/components/navigation.njk`.  

It looks for the eleventyNavigation object in pages and adds them to the navigation bar. It also checks whether the site's url is in the currently opened url and highlights the navigation item accordingly. This even works for subpages. So if you're on `/blog/post/` the **Blog** nav item will still be active.


### Adding links to the navigation
Add the `eleventyNavigation` object to any page and it will appear in the navigation. Optionally set the order of your items.
Check the [11ty docs](https://www.11ty.dev/docs/plugins/navigation/) for more information about the navigation plugin.

```
---
eleventyNavigation:
  key: Your Page Name
  order: 1
---
```


### Changing the navigation item styles
The script in `/_includes/components/navigation.njk` checks if a navigation item is active and styles it accordingly.
Let's dissect the code:

```
<a
  href="{{ entry.url }}"

  // Base styles for all navigation items
  class="uppercase text-sm py-1 px-2 rounded inline-block
  
  // Active navigation items
  {% if (entry.url in page.url and entry.url != '/') or (page.url == '/' and entry.url == '/')  %}
    bg-black text-white
  
  // Default navigation items
  {% else %}
    text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700
  {% endif %}">
  {{ entry.title }}
</a>
```

## How to: Dark mode

As someone with limited development skills, it was harder than expected to implement a dark-light-mode toggle. So I dug into it and built it into the template.
You can easily remove it if you don't need it.

Per default, the site takes the user's operating system preference.

Once the user toggles the mode manually, it is saved to local storage and will override system preference. 

You can add a button that forgets the manually selected mode. See line 50 in `navigation.njk`:

```
<button id="forgetPref" onclick="forgetPref()">Forget</button>
```

If you don't need the dark mode toggle, do this:
1. Remove the entire `<script>...</script>` from the head of `base.njk`
2. Remove the entire `<button>...</button>` from `navigation.njk`
3. Remove any classes that start with `dark:`from `base.njk` and `navigation.njk`



## How To: Blog

Add a page in `_src/blog/posts` and it will appear in the post list.

## Images

Put your images into `_src/img` and add them to your markup like so:
```
<img src="/img/example-image.jpg">
```



## Credits

[Bryan L. Robinson](https://bryanlrobinson.com/blog/using-nunjucks-if-expressions-to-create-an-active-navigation-state-in-11ty/) for explaining how to create the active navigation state

https://11ty.io/

https://tailwindcss.com
