

function Category() {
    const data = [
        {
            id: 0,
            cateImg: "./images/category/cat1.png",
            cateName: "Fashion",
        },
        {
            id: 1,
            cateImg: "./images/category/cat2.png",
            cateName: "Electronic",
        },
        {
            id: 2,
            cateImg: "./images/category/cat3.png",
            cateName: "Cars",
        },
        {
            id: 3,
            cateImg: "./images/category/cat4.png",
            cateName: "Home & Garden",
        },
        {
            id: 4,
            cateImg: "./images/category/cat5.png",
            cateName: "Gifts",
        },
        {
            id: 5,
            cateImg: "./images/category/cat6.png",
            cateName: "Music",
        },
        {
            id: 6,
            cateImg: "./images/category/cat7.png",
            cateName: "Health & Beauty",
        },
        {
            id: 7,
            cateImg: "./images/category/cat8.png",
            cateName: "Pets",
        },
        {
            id: 8,
            cateImg: "./images/category/cat9.png",
            cateName: "Baby Toys",
        },
        {
            id: 9,
            cateImg: "./images/category/cat10.png",
            cateName: "Groceries",
        },
        {
            id: 10,
            cateImg: "./images/category/cat11.png",
            cateName: "Books",
        },
    ]

    let categoryItems = data.map((cat) => {
        return <div className="cat-item" key={cat.id}>
            <img src={cat.cateImg} alt="" className="category-img" />
            <span>{cat.cateName}</span>
        </div>
    })
    return (
        <div className="category-div">
            {categoryItems}
        </div>
    );
}

export default Category;