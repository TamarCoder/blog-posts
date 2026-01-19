# პაგინაციის განხორციელება

## რა გაკეთდა

`PostsContent` კომპონენტში დამატეს დინამიური პაგინაცია, რომელიც დაკავშირებულია პოსტების რაოდენობაზე.

## როგორ მუშაობს

### 1. **მონაცემები**
- 6 პოსტი არსებობს `PostDate.ts` ფაილში

### 2. **გვერდების გამოთვლა**
```tsx
const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
```
- მთლიანი გვერდების რაოდენობა = (პოსტების რაოდენობა ÷ 3) დამრგვალებული
- 6 პოსტი ÷ 3 პოსტი/გვერდი = **2 გვერდი**

### 3. **პოსტების ფილტრაცია**
```tsx
const paginatedPosts = useMemo(() => {
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  return posts.slice(startIndex, endIndex);
}, [currentPage]);
```
- თითოეული გვერდისთვის გამოითვლება რომელი პოსტები უნდა ჩვენდეს
- მხოლოდ სწორი 3 პოსტი გამოჩნდება

### 4. **გვერდის შეცვლა**
```tsx
function handlePageChange(page: number): void {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
```
- Pagination ღილაკებზე კლიკი აზემატოთ გვერდს და გააქროთ გვერდის ზევით

## Pagination Props

| Props | მნიშვნელობა |
|-------|-----------|
| `currentPage` | მიმდინარე გვერდი |
| `totalPages` | **დინამიური** - პოსტების საფუძველზე |
| `onPageChange` | `handlePageChange` ფუნქცია |
| `variant` | "rounded" |

## თუ დაამატებთ ახალ პოსტებს

პაგინაცია **ავტომატურად** სწორი იქნება - ჯერ კიდევ რაიმე შეცვლა არ სჭირდება!