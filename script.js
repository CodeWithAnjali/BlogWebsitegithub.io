



// Sample data for blog posts
const blogPosts = [];

// DOM Elements
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const saveButton = document.getElementById('save');
const postList = document.getElementById('post-list');

// Save button click event
saveButton.addEventListener('click', () => {
    const title = titleInput.value;
    const content = contentInput.value;
    
    if (title && content) {
        const post = { title, content };
        blogPosts.push(post);

        // Clear input fields
        titleInput.value = '';
        contentInput.value = '';

        // Display the new post
        displayBlogPost(post);
    }
});

// Display a blog post
function displayBlogPost(post) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<h3>${post.title}</h3>${post.content}`;
    postList.appendChild(listItem);
}

// Function to initially display existing blog posts
function displayExistingBlogPosts() {
    blogPosts.forEach((post) => {
        displayBlogPost(post);
    });
}

// Call the function to display existing blog posts when the page loads
displayExistingBlogPosts();
