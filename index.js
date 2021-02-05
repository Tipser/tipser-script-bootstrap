// Components
const HomePage = {
    render: () => {
        return `
            <h2 class="heading">Product</h2>
            <!-- This is a marker element for tipser product, given tipser product id -->
            <div data-tipser-pid="5c6ff65d75afb80001816edc"></div>

            <h2 class="heading">Product compact</h2>
            <!-- This is a marker element for tipser product with compact mode enabled, given tipser product id -->
            <div data-tipser-pid="59083a8f60689325d8727ad9" data-tipser-view="compact"></div>

            <h2 class='heading'>Collection</h2>
            <!-- This is a marker element for tipser Collection, given tipser collection id -->

            <div data-tipser-cid="5cf51fec561f17000129fcb7"><a
            href="https://www.tipser.com:443/shops/tipser/shoes"></a>SHOES</a> </div>


            <!-- This is a marker element for tipser Collection with carousel -->
            <h2 class="heading">Collection with carousel</h2>
            <div data-tipser-cid="5b9665929d25800a1c9b6b34" data-tipser-carousel><a
            href="https://www.tipser.com:443/shops/tipser/shoes"></a>SHOES</a> </div>

            <h2 class="heading">Store</h2>
            <!-- This is a marker element for tipser shop -->
            <div id="tipser_shop"></div>
        `;
    }
}
const ProductPage = {
    render: () => {
        return `
        <h2>Product Page</h2>
        <div data-tipser-product-page="5bc6e1c7df2ac60001158814"></div>
    `;
    }
};

const ErrorComponent = {
    render: () => {
        return `
      <section>
        <h1>Error</h1>
      </section>
    `;
    }
};

// Routes
const routes = [
    { path: '/', component: HomePage, },
    { path: '/product', component: ProductPage, },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const router = () => {
    //  Find the component based on the current path
    const path = parseLocation();
    console.log({path});
    // If there's no matching route, get the "Error" component
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    // Render the component in the "app" placeholder
    document.getElementById('root').innerHTML = component.render();
};

const log = () => {
    console.log('hash')
}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);