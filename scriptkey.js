function checkPassword() {
    var password = document.getElementById("password").value;
    var key = "8F^e&4m#L!p2@qG9j$W5yZc*H7nXu3sR6dE1bV%iA0oNtY@xQ1wS4gU2kP3"; // Replace "your_password_here" with your actual password

    if (password === key) {
        window.location.href = "https://proger001.github.io/minesziverd/#tgWebAppData=query_id%3DAAE_1zN4AAAAAD_XM3g5Ku0D%26user%3D%257B%2522id%2522%253A2016663359%252C%2522first_name%2522%253A%2522ASHISH%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522Ashishkumarmurmu%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1715605182%26hash%3D9a613e00922214d9c6db61316c11be3ec4462ec4b84e2ff37cdb61fb4b38262f&tgWebAppVersion=7.2&tgWebAppPlatform=web&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23212121%22%2C%22button_color%22%3A%22%238774e1%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22hint_color%22%3A%22%23aaaaaa%22%2C%22link_color%22%3A%22%238774e1%22%2C%22secondary_bg_color%22%3A%22%23181818%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22header_bg_color%22%3A%22%23212121%22%2C%22accent_text_color%22%3A%22%238774e1%22%2C%22section_bg_color%22%3A%22%23212121%22%2C%22section_header_text_color%22%3A%22%238774e1%22%2C%22subtitle_text_color%22%3A%22%23aaaaaa%22%2C%22destructive_text_color%22%3A%22%23ff595a%22%7D"; // Redirect to the next page
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Please try again.";
    }
}
