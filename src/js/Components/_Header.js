const Header = document.querySelector("header");

Header.innerHTML = `
    <div class="company">
        <div class="logo" id="companyLogo">
        <img src="./public/images/DataXpressLogo.png" alt="" />
        </div>
    </div>

    <nav class="nav" id=" nav">
        <div class="navigation">
        <ul class="nav-list">
            <li class="nav-item">
            <a class="nav-link" href="./VerifedAnalysts.html">
                About Us </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="./index.html#benefits">
                Our Services
                </a>
            </li>

            <li class="nav-item">
            <a class="nav-link" href="./index.html#about"
                >Blog 
            </a>
            </li>

            <li class="nav-item">
            <a class="nav-link" href="./index.html#Forum"
                >Join Forum 
            </a>
            </li>

            <li class="nav-item" id="">
            <a class="nav-link" href="./contact.html"
                >Get in touch
            </a>
            </li>
            <li class="nav-item contactus" id="">
            <a class="nav-link" href="./contact.html"
                >Login
            </a>
            </li>
        </ul>
        </div>

        <div class="menu-toggle">
        <i class="material-icons">menu</i>
        </div>
    </nav>
    `;
