import React from 'react';

const VendorDashboardPage = () => {
  return (
    <main className='main pages'>
      <div className='page-header breadcrumb-wrap'>
        <div className='container'>
          <div className='breadcrumb'>
            <a href='index.html' rel='nofollow'>
              <i className='fi-rs-home mr-5' />
              Home
            </a>
            <span /> Vendor <span /> Dashboard
          </div>
        </div>
      </div>
      <div className='page-content pt-50'>
        <div className='container'>
          <h1 className='display-2 mt-30 pb-30'>Dashboard</h1>
          <hr className='mb-80' />
          <div className='row'>
            <div className='col-lg-9'>
              <h3 className='mb-30'>Recent Orders</h3>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1357</td>
                      <td>March 45, 2020</td>
                      <td>Processing</td>
                      <td>$125.00 for 2 item</td>
                      <td>
                        <a href='#' className='btn-small d-block'>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#2468</td>
                      <td>June 29, 2020</td>
                      <td>Completed</td>
                      <td>$364.00 for 5 item</td>
                      <td>
                        <a href='#' className='btn-small d-block'>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#2366</td>
                      <td>August 02, 2020</td>
                      <td>Completed</td>
                      <td>$280.00 for 3 item</td>
                      <td>
                        <a href='#' className='btn-small d-block'>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#1357</td>
                      <td>March 45, 2020</td>
                      <td>Processing</td>
                      <td>$125.00 for 2 item</td>
                      <td>
                        <a href='#' className='btn-small d-block'>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#2468</td>
                      <td>June 29, 2020</td>
                      <td>Completed</td>
                      <td>$364.00 for 5 item</td>
                      <td>
                        <a href='#' className='btn-small d-block'>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#2366</td>
                      <td>August 02, 2020</td>
                      <td>Completed</td>
                      <td>$280.00 for 3 item</td>
                      <td>
                        <a href='#' className='btn-small d-block'>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#1357</td>
                      <td>March 45, 2020</td>
                      <td>Processing</td>
                      <td>$125.00 for 2 item</td>
                      <td>
                        <a href='#' className='btn-small d-block'>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#2468</td>
                      <td>June 29, 2020</td>
                      <td>Completed</td>
                      <td>$364.00 for 5 item</td>
                      <td>
                        <a href='#' className='btn-small d-block'>
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='primary-sidebar'>
                <div className='sidebar-widget product-sidebar mt-15 p-30 bg-grey border-radius-10'>
                  <h5 className='section-title style-1 mb-30'>Best sell</h5>
                  <div className='single-post clearfix'>
                    <div className='image'>
                      <img src='assets/imgs/shop/thumbnail-3.jpg' alt='#' />
                    </div>
                    <div className='content pt-10'>
                      <h5>
                        <a href='https://wp.alithemes.com/html/nest/demo/shop-product-detail.html'>
                          Chen Cardigan
                        </a>
                      </h5>
                      <p className='price mb-0 mt-5'>$99.50</p>
                      <div className='product-rate'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='single-post clearfix'>
                    <div className='image'>
                      <img src='assets/imgs/shop/thumbnail-4.jpg' alt='#' />
                    </div>
                    <div className='content pt-10'>
                      <h6>
                        <a href='https://wp.alithemes.com/html/nest/demo/shop-product-detail.html'>
                          Chen Sweater
                        </a>
                      </h6>
                      <p className='price mb-0 mt-5'>$89.50</p>
                      <div className='product-rate'>
                        <div
                          className='product-rating'
                          style={{ width: '80%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='single-post clearfix'>
                    <div className='image'>
                      <img src='assets/imgs/shop/thumbnail-5.jpg' alt='#' />
                    </div>
                    <div className='content pt-10'>
                      <h6>
                        <a href='https://wp.alithemes.com/html/nest/demo/shop-product-detail.html'>
                          Colorful Jacket
                        </a>
                      </h6>
                      <p className='price mb-0 mt-5'>$25</p>
                      <div className='product-rate'>
                        <div
                          className='product-rating'
                          style={{ width: '60%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mb-50 mt-50'>
            <div className='col-lg-12'>
              <h3 className='mb-30'>Your Products</h3>
              <div className='row product-grid'>
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-1-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-1-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='hot'>Hot</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Snack</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Seeds of Change Organic Quinoe Naturel
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$28.85</span>
                          <span className='old-price'>$32.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-2-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-2-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='sale'>Sale</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Hodo Foods</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          All Natural Italian-Style Chicken Meatballs
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '80%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (3.5)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>Stouffer</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$52.85</span>
                          <span className='old-price'>$55.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-3-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-3-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='new'>New</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Snack</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Angie’s Boomchickapop Sweet &amp; Salty
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '85%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>StarKist</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$48.85</span>
                          <span className='old-price'>$52.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-4-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-4-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Vegetables</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Foster Farms Takeout Crispy Classic
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$17.85</span>
                          <span className='old-price'>$19.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-5-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-5-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='best'>-14%</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Pet Foods</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Blue Diamond Almonds Lightly Naturel
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$23.85</span>
                          <span className='old-price'>$25.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-6-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-6-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Hodo Foods</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Chobani Complete Vanilla Greek Bottle
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$54.85</span>
                          <span className='old-price'>$55.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-7-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-7-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Meats</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Canada Dry Ginger Ale – 2 L Bottle
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$32.85</span>
                          <span className='old-price'>$33.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-8-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-8-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='sale'>Sale</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Snack</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Encore Seafoods Stuffed Alaskan
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$35.85</span>
                          <span className='old-price'>$37.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-9-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-9-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='hot'>Hot</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Coffes</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Gorton’s Beer Battered Fish Fillets
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>Old El Paso</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$23.85</span>
                          <span className='old-price'>$25.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-10-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-10-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Cream</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Haagen-Dazs Caramel Cone Ice Cream
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '50%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (2.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>Tyson</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$22.85</span>
                          <span className='old-price'>$24.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-1-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-1-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='hot'>Hot</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Snack</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Seeds of Change Organic Quinoe Naturel
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$28.85</span>
                          <span className='old-price'>$32.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-2-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-2-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='sale'>Sale</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Hodo Foods</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          All Natural Italian-Style Chicken Meatballs
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '80%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (3.5)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>Stouffer</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$52.85</span>
                          <span className='old-price'>$55.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-3-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-3-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='new'>New</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Snack</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Angie’s Boomchickapop Sweet &amp; Salty
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '85%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>StarKist</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$48.85</span>
                          <span className='old-price'>$52.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-4-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-4-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Vegetables</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Foster Farms Takeout Crispy Classic
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$17.85</span>
                          <span className='old-price'>$19.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-5-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-5-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='best'>-14%</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Pet Foods</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Blue Diamond Almonds Lightly Naturel
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$23.85</span>
                          <span className='old-price'>$25.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-6-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-6-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Hodo Foods</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Chobani Complete Vanilla Greek Bottle
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$54.85</span>
                          <span className='old-price'>$55.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-7-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-7-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Meats</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Canada Dry Ginger Ale – 2 L Bottle
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$32.85</span>
                          <span className='old-price'>$33.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-8-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-8-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='sale'>Sale</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Snack</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Encore Seafoods Stuffed Alaskan
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>NestFood</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$35.85</span>
                          <span className='old-price'>$37.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                  <div className='product-cart-wrap mb-30'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-9-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-9-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                      <div className='product-badges product-badges-position product-badges-mrg'>
                        <span className='hot'>Hot</span>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Coffes</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Gorton’s Beer Battered Fish Fillets
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '90%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>Old El Paso</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$23.85</span>
                          <span className='old-price'>$25.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
                <div className='col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block'>
                  <div className='product-cart-wrap'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img product-img-zoom'>
                        <a href='shop-product-right.html'>
                          <img
                            className='default-img'
                            src='assets/imgs/shop/product-10-1.jpg'
                            alt=''
                          />
                          <img
                            className='hover-img'
                            src='assets/imgs/shop/product-10-2.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='product-action-1'>
                        <a
                          aria-label='Add To Wishlist'
                          className='action-btn'
                          href='shop-wishlist.html'
                        >
                          <i className='fi-rs-heart' />
                        </a>
                        <a
                          aria-label='Compare'
                          className='action-btn'
                          href='shop-compare.html'
                        >
                          <i className='fi-rs-shuffle' />
                        </a>
                        <a
                          aria-label='Quick view'
                          className='action-btn'
                          data-bs-toggle='modal'
                          data-bs-target='#quickViewModal'
                        >
                          <i className='fi-rs-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='product-category'>
                        <a href='shop-grid-right.html'>Cream</a>
                      </div>
                      <h2>
                        <a href='shop-product-right.html'>
                          Haagen-Dazs Caramel Cone Ice Cream
                        </a>
                      </h2>
                      <div className='product-rate-cover'>
                        <div className='product-rate d-inline-block'>
                          <div
                            className='product-rating'
                            style={{ width: '50%' }}
                          />
                        </div>
                        <span className='font-small ml-5 text-muted'>
                          {' '}
                          (2.0)
                        </span>
                      </div>
                      <div>
                        <span className='font-small text-muted'>
                          By <a href='vendor-details-1.html'>Tyson</a>
                        </span>
                      </div>
                      <div className='product-card-bottom'>
                        <div className='product-price'>
                          <span>$22.85</span>
                          <span className='old-price'>$24.8</span>
                        </div>
                        <div className='add-cart'>
                          <a className='add' href='shop-cart.html'>
                            <i className='fi-rs-edit mr-5' />
                            Edit{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end product card*/}
              </div>
              {/*product grid*/}
              <div className='pagination-area mt-20 mb-20'>
                <nav aria-label='Page navigation example'>
                  <ul className='pagination justify-content-start'>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        <i className='fi-rs-arrow-small-left' />
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        1
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a className='page-link' href='#'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        3
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link dot' href='#'>
                        ...
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        6
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        <i className='fi-rs-arrow-small-right' />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VendorDashboardPage;
