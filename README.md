## Blog Posts App

Next.js 16 + Turbopack demo for a blog-style feed with category filtering and client-side pagination.

### Quick start
- Install deps: `npm install`
- Dev server: `npm run dev`
- Open: http://localhost:3000

### Core logic (მნიშვნელოვანი)

- **კატეგორიების ფილტრაცია (Zustand store)**
	- State ინახება [app/store/categroyFilter.ts](app/store/categroyFilter.ts).
	- `activeCategory` აორჩევს მიმდინარე ფილტრს; `setActiveCategory` აახლებს.
	- `filterPosts()` აბრუნებს ან ყველა პოსტს, ან მხოლოდ არჩეული კატეგორიის პოსტებს.
	- UI ღილაკები მოდის [Categories](app/Components/MainContent/PostsContent/MainRightSide/Categories/Categories.tsx) კომპონენტიდან, რომელიც store-ს ატრიალებს.

- **პაგინაცია + ფილტრაციის დაკავშირება**
	- მთავარი ლოგიკა არის [PostsContent](app/Components/MainContent/PostsContent/PostsContent.tsx#L13-L40):
		- `filteredByCategory` იზრდება `useMemo`-ით აქტიური კატეგორიის მიხედვით.
		- `totalPages` გამოითვლება `filteredByCategory.length / POSTS_PER_PAGE`-ით, ამიტომ კატეგორიის შეცვლა გვერდების რაოდენობასაც ცვლის.
		- `useEffect` (ხაზი ~19) კატეგორიის ყოველ ცვლილებაზე `currentPage`-ს აბრუნებს 1-ზე.
		- `paginatedPosts` ჭრის მხოლოდ მიმდინარე გვერდის პოსტებს და ეგ რეალურად რენდერდება.
		- `handlePageChange` აახლებს გვერდს და აკეთებს smooth scroll-ს ზევით.

- **Pagination UI კომპონენტი**
	- მდებარეობს [app/Components/ReusableComponents/Pagination/Pagination.tsx](app/Components/ReusableComponents/Pagination/Pagination.tsx).
	- Range generator + DOTS ლოგიკა უზრუნველყოფს "..." შუალედებს დიდი გვერდებისას.
	- Props: `currentPage`, `totalPages`, `onPageChange`, `variant` (`default`/`rounded`), `size`, `siblingCount`, `showFirstLast`, `showPrevNext`, `disabled`.
	- Internal guard აკავებს კლიკებს როცა `disabled` ან იგივე გვერდზე გადასვლას ცდილობ.

- **მონაცემები**
	- პოსტები ინახება [PostDate.ts](app/Components/MainContent/PostsContent/PostDate.ts)-ში; ყოველი ობიექტი შეიცავს `categories`, `postImage`, `postTitle`, `description`, `postData` ველებს.

### სად ვეძებო რა
- მთავარი გვერდის content layout: [app/Components/MainContent/MainContent.tsx](app/Components/MainContent/MainContent.tsx)
- Hero/Sidebar/Posts ბლოკები: [app/Components/MainContent](app/Components/MainContent)
- გლობალური სტილები: [app/globals.css](app/globals.css)

### Dev რჩევა
- თუ Turbopack-ის stale bundle პრობლემას წააწყდებით, გაწმინდეთ cache: `rm -rf .next` და თავიდან გაუშვით `npm run dev`.
