document.getElementById("regForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        gender: formData.get("gender"),
        category: formData.get("category"),
        hobbies: formData.getAll("hobbies").join(", "),
        satisfaction: formData.get("satisfaction"),
        comments: formData.get("comments")
    };

    const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const msg = await res.text();
    alert(msg);
});