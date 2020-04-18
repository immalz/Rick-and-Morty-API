const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/" style="color:black">
                        Rick and Morty Character
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <a href="#/about/" style="color:black">
                About</a>
            </div>
        </div>
    `;
    return view;
};

export default Header;