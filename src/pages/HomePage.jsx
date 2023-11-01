import React from 'react';

const HomePage = () => {
  return (
    <main className='main'>
      <div className='container mb-30'>
        <div className='row flex-row-reverse'>
          <div className='col-lg-4-5'>
            <section className='home-slider position-relative mb-30'>
              <div className='home-slide-cover mt-30'>
                <div className='hero-slider-1 style-4 dot-style-1 dot-style-1-position-1'>
                  <div
                    className='single-hero-slider single-animation-wrap'
                    style={{
                      backgroundImage: 'url(assets/imgs/slider/slider-1.png)',
                    }}
                  >
                    <div className='slider-content'>
                      <h1 className='display-2 mb-40'>
                        Don’t miss amazing
                        <br />
                        grocery deals
                      </h1>
                      <p className='mb-65'>Sign up for the daily newsletter</p>
                      <form className='form-subcriber d-flex'>
                        <input type='email' placeholder='Your emaill address' />
                        <button className='btn' type='submit'>
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                  <div
                    className='single-hero-slider single-animation-wrap'
                    style={{
                      backgroundImage: 'url(assets/imgs/slider/slider-2.png)',
                    }}
                  >
                    <div className='slider-content'>
                      <h1 className='display-2 mb-40'>
                        Fresh Vegetables
                        <br />
                        Big discount
                      </h1>
                      <p className='mb-65'>
                        Save up to 50% off on your first order
                      </p>
                      <form className='form-subcriber d-flex'>
                        <input type='email' placeholder='Your emaill address' />
                        <button className='btn' type='submit'>
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='slider-arrow hero-slider-1-arrow' />
              </div>
            </section>
            {/*End hero*/}
            <section className='product-tabs section-padding position-relative'>
              <div className='section-title style-2'>
                <h3>Popular Products</h3>
                <ul className='nav nav-tabs links' id='myTab' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active'
                      id='nav-tab-one'
                      data-bs-toggle='tab'
                      data-bs-target='#tab-one'
                      type='button'
                      role='tab'
                      aria-controls='tab-one'
                      aria-selected='true'
                    >
                      All
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='nav-tab-two'
                      data-bs-toggle='tab'
                      data-bs-target='#tab-two'
                      type='button'
                      role='tab'
                      aria-controls='tab-two'
                      aria-selected='false'
                    >
                      Milks &amp; Dairies
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='nav-tab-three'
                      data-bs-toggle='tab'
                      data-bs-target='#tab-three'
                      type='button'
                      role='tab'
                      aria-controls='tab-three'
                      aria-selected='false'
                    >
                      Coffes &amp; Teas
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='nav-tab-four'
                      data-bs-toggle='tab'
                      data-bs-target='#tab-four'
                      type='button'
                      role='tab'
                      aria-controls='tab-four'
                      aria-selected='false'
                    >
                      Pet Foods
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='nav-tab-five'
                      data-bs-toggle='tab'
                      data-bs-target='#tab-five'
                      type='button'
                      role='tab'
                      aria-controls='tab-five'
                      aria-selected='false'
                    >
                      Meats
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='nav-tab-six'
                      data-bs-toggle='tab'
                      data-bs-target='#tab-six'
                      type='button'
                      role='tab'
                      aria-controls='tab-six'
                      aria-selected='false'
                    >
                      Vegetables
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='nav-tab-seven'
                      data-bs-toggle='tab'
                      data-bs-target='#tab-seven'
                      type='button'
                      role='tab'
                      aria-controls='tab-seven'
                      aria-selected='false'
                    >
                      Fruits
                    </button>
                  </li>
                </ul>
              </div>
              {/*End nav-tabs*/}
              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='tab-one'
                  role='tabpanel'
                  aria-labelledby='tab-one'
                >
                  <div className='row product-grid-4'>
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
                              Seeds of Change Organic Quinoe
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Blue Diamond Almonds Lightly
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Chobani Complete Vanilla Greek
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                  </div>
                  {/*End product-grid-4*/}
                </div>
                {/*En tab one*/}
                <div
                  className='tab-pane fade'
                  id='tab-two'
                  role='tabpanel'
                  aria-labelledby='tab-two'
                >
                  <div className='row product-grid-4'>
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
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
                              Seeds of Change Organic Quinoa, Brown, &amp; Red
                              Rice
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                src='assets/imgs/shop/product-12-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-12-2.jpg'
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                src='assets/imgs/shop/product-13-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-13-2.jpg'
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
                              Angie’s Boomchickapop Sweet &amp; Salty Kettle
                              Corn
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                src='assets/imgs/shop/product-14-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-14-2.jpg'
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
                              Foster Farms Takeout Crispy Classic Buffalo Wings
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                src='assets/imgs/shop/product-15-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-15-2.jpg'
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
                              Blue Diamond Almonds Lightly Salted Vegetables
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
                        <div className='product-img-action-wrap'>
                          <div className='product-img product-img-zoom'>
                            <a href='shop-product-right.html'>
                              <img
                                className='default-img'
                                src='assets/imgs/shop/product-16-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-16-2.jpg'
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
                              Chobani Complete Vanilla Greek Yogurt
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Encore Seafoods Stuffed Alaskan Salmon
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Gorton’s Beer Battered Fish Fillets with soft
                              paper
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Haagen-Dazs Caramel Cone Ice Cream Ketchup
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                  </div>
                  {/*End product-grid-4*/}
                </div>
                {/*En tab two*/}
                <div
                  className='tab-pane fade'
                  id='tab-three'
                  role='tabpanel'
                  aria-labelledby='tab-three'
                >
                  <div className='row product-grid-4'>
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
                            <a href='shop-grid-right.html'>Snack</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Seeds of Change Organic Quinoa, Brown, &amp; Red
                              Rice
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Angie’s Boomchickapop Sweet &amp; Salty Kettle
                              Corn
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                            <a href='shop-grid-right.html'>Vegetables</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Foster Farms Takeout Crispy Classic Buffalo Wings
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Blue Diamond Almonds Lightly Salted Vegetables
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                            <a href='shop-grid-right.html'>Hodo Foods</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Chobani Complete Vanilla Greek Yogurt
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Meats</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                            <a href='shop-grid-right.html'>Snack</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Encore Seafoods Stuffed Alaskan Salmon
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Gorton’s Beer Battered Fish Fillets with soft
                              paper
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Cream</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Haagen-Dazs Caramel Cone Ice Cream Ketchup
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                  </div>
                  {/*End product-grid-4*/}
                </div>
                {/*En tab three*/}
                <div
                  className='tab-pane fade'
                  id='tab-four'
                  role='tabpanel'
                  aria-labelledby='tab-four'
                >
                  <div className='row product-grid-4'>
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
                              Seeds of Change Organic Quinoa, Brown, &amp; Red
                              Rice
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                            <span className='new'>New</span>
                          </div>
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Snack</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Angie’s Boomchickapop Sweet &amp; Salty Kettle
                              Corn
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Vegetables</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Foster Farms Takeout Crispy Classic Buffalo Wings
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Blue Diamond Almonds Lightly Salted Vegetables
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Hodo Foods</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Chobani Complete Vanilla Greek Yogurt
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Meats</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                            <span className='sale'>Sale</span>
                          </div>
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Snack</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Encore Seafoods Stuffed Alaskan Salmon
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
                        <div className='product-img-action-wrap'>
                          <div className='product-img product-img-zoom'>
                            <a href='shop-product-right.html'>
                              <img
                                className='default-img'
                                src='assets/imgs/shop/product-11-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-11-2.jpg'
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
                              Gorton’s Beer Battered Fish Fillets with soft
                              paper
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                src='assets/imgs/shop/product-12-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-12-2.jpg'
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
                              Haagen-Dazs Caramel Cone Ice Cream Ketchup
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                  </div>
                  {/*End product-grid-4*/}
                </div>
                {/*En tab four*/}
                <div
                  className='tab-pane fade'
                  id='tab-five'
                  role='tabpanel'
                  aria-labelledby='tab-five'
                >
                  <div className='row product-grid-4'>
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap mb-30'>
                        <div className='product-img-action-wrap'>
                          <div className='product-img product-img-zoom'>
                            <a href='shop-product-right.html'>
                              <img
                                className='default-img'
                                src='assets/imgs/shop/product-12-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-12-2.jpg'
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
                              Seeds of Change Organic Quinoa, Brown, &amp; Red
                              Rice
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                src='assets/imgs/shop/product-13-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-13-2.jpg'
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                src='assets/imgs/shop/product-14-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-14-2.jpg'
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
                              Angie’s Boomchickapop Sweet &amp; Salty Kettle
                              Corn
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                src='assets/imgs/shop/product-15-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-15-2.jpg'
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
                              Foster Farms Takeout Crispy Classic Buffalo Wings
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                src='assets/imgs/shop/product-16-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-16-2.jpg'
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
                              Blue Diamond Almonds Lightly Salted Vegetables
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Hodo Foods</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Chobani Complete Vanilla Greek Yogurt
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Encore Seafoods Stuffed Alaskan Salmon
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Gorton’s Beer Battered Fish Fillets with soft
                              paper
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Haagen-Dazs Caramel Cone Ice Cream Ketchup
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                  </div>
                  {/*End product-grid-4*/}
                </div>
                {/*En tab five*/}
                <div
                  className='tab-pane fade'
                  id='tab-six'
                  role='tabpanel'
                  aria-labelledby='tab-six'
                >
                  <div className='row product-grid-4'>
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
                              Seeds of Change Organic Quinoa, Brown, &amp; Red
                              Rice
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                            <span className='new'>New</span>
                          </div>
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Snack</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Angie’s Boomchickapop Sweet &amp; Salty Kettle
                              Corn
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Vegetables</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Foster Farms Takeout Crispy Classic Buffalo Wings
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Blue Diamond Almonds Lightly Salted Vegetables
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Chobani Complete Vanilla Greek Yogurt
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Encore Seafoods Stuffed Alaskan Salmon
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Gorton’s Beer Battered Fish Fillets with soft
                              paper
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Haagen-Dazs Caramel Cone Ice Cream Ketchup
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                  </div>
                  {/*End product-grid-4*/}
                </div>
                {/*En tab six*/}
                <div
                  className='tab-pane fade'
                  id='tab-seven'
                  role='tabpanel'
                  aria-labelledby='tab-seven'
                >
                  <div className='row product-grid-4'>
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
                            <span className='hot'>Hot</span>
                          </div>
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Snack</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Seeds of Change Organic Quinoa, Brown, &amp; Red
                              Rice
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Angie’s Boomchickapop Sweet &amp; Salty Kettle
                              Corn
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                        </div>
                        <div className='product-content-wrap'>
                          <div className='product-category'>
                            <a href='shop-grid-right.html'>Vegetables</a>
                          </div>
                          <h2>
                            <a href='shop-product-right.html'>
                              Foster Farms Takeout Crispy Classic Buffalo Wings
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Blue Diamond Almonds Lightly Salted Vegetables
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
                        <div className='product-img-action-wrap'>
                          <div className='product-img product-img-zoom'>
                            <a href='shop-product-right.html'>
                              <img
                                className='default-img'
                                src='assets/imgs/shop/product-16-1.jpg'
                                alt=''
                              />
                              <img
                                className='hover-img'
                                src='assets/imgs/shop/product-16-2.jpg'
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
                              Chobani Complete Vanilla Greek Yogurt
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Encore Seafoods Stuffed Alaskan Salmon
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                    <div className='col-lg-1-5 col-md-4 col-12 col-sm-6'>
                      <div className='product-cart-wrap'>
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
                              Gorton’s Beer Battered Fish Fillets with soft
                              paper
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
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
                              Haagen-Dazs Caramel Cone Ice Cream Ketchup
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
                                <i className='fi-rs-shopping-cart mr-5' />
                                Add{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end product card*/}
                  </div>
                  {/*End product-grid-4*/}
                </div>
                {/*En tab seven*/}
              </div>
              {/*End tab-content*/}
            </section>
            {/*Products Tabs*/}
            <section className='section-padding pb-5'>
              <div className='section-title'>
                <h3 className>Deals Of The Day</h3>
                <a className='show-all' href='shop-grid-right.html'>
                  All Deals
                  <i className='fi-rs-angle-right' />
                </a>
              </div>
              <div className='row'>
                <div className='col-xl-3 col-lg-4 col-md-6'>
                  <div className='product-cart-wrap style-2'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img'>
                        <a href='shop-product-right.html'>
                          <img src='assets/imgs/banner/banner-5.png' alt='' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='deals-countdown-wrap'>
                        <div
                          className='deals-countdown'
                          data-countdown='2025/03/25 00:00:00'
                        />
                      </div>
                      <div className='deals-content'>
                        <h2>
                          <a href='shop-product-right.html'>
                            Seeds of Change Organic Quinoa, Brown
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
                              <i className='fi-rs-shopping-cart mr-5' />
                              Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4 col-md-6'>
                  <div className='product-cart-wrap style-2'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img'>
                        <a href='shop-product-right.html'>
                          <img src='assets/imgs/banner/banner-6.png' alt='' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='deals-countdown-wrap'>
                        <div
                          className='deals-countdown'
                          data-countdown='2026/04/25 00:00:00'
                        />
                      </div>
                      <div className='deals-content'>
                        <h2>
                          <a href='shop-product-right.html'>
                            Perdue Simply Smart Organics Gluten
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
                            <span>$24.85</span>
                            <span className='old-price'>$26.8</span>
                          </div>
                          <div className='add-cart'>
                            <a className='add' href='shop-cart.html'>
                              <i className='fi-rs-shopping-cart mr-5' />
                              Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4 col-md-6 d-none d-lg-block'>
                  <div className='product-cart-wrap style-2'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img'>
                        <a href='shop-product-right.html'>
                          <img src='assets/imgs/banner/banner-7.png' alt='' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='deals-countdown-wrap'>
                        <div
                          className='deals-countdown'
                          data-countdown='2027/03/25 00:00:00'
                        />
                      </div>
                      <div className='deals-content'>
                        <h2>
                          <a href='shop-product-right.html'>
                            Signature Wood-Fired Mushroom
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
                            (3.0)
                          </span>
                        </div>
                        <div>
                          <span className='font-small text-muted'>
                            By <a href='vendor-details-1.html'>Progresso</a>
                          </span>
                        </div>
                        <div className='product-card-bottom'>
                          <div className='product-price'>
                            <span>$12.85</span>
                            <span className='old-price'>$13.8</span>
                          </div>
                          <div className='add-cart'>
                            <a className='add' href='shop-cart.html'>
                              <i className='fi-rs-shopping-cart mr-5' />
                              Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4 col-md-6 d-none d-xl-block'>
                  <div className='product-cart-wrap style-2'>
                    <div className='product-img-action-wrap'>
                      <div className='product-img'>
                        <a href='shop-product-right.html'>
                          <img src='assets/imgs/banner/banner-8.png' alt='' />
                        </a>
                      </div>
                    </div>
                    <div className='product-content-wrap'>
                      <div className='deals-countdown-wrap'>
                        <div
                          className='deals-countdown'
                          data-countdown='2025/02/25 00:00:00'
                        />
                      </div>
                      <div className='deals-content'>
                        <h2>
                          <a href='shop-product-right.html'>
                            Simply Lemonade with Raspberry Juice
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
                            (3.0)
                          </span>
                        </div>
                        <div>
                          <span className='font-small text-muted'>
                            By <a href='vendor-details-1.html'>Yoplait</a>
                          </span>
                        </div>
                        <div className='product-card-bottom'>
                          <div className='product-price'>
                            <span>$15.85</span>
                            <span className='old-price'>$16.8</span>
                          </div>
                          <div className='add-cart'>
                            <a className='add' href='shop-cart.html'>
                              <i className='fi-rs-shopping-cart mr-5' />
                              Add{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End Deals*/}
            <section className='banners'>
              <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <div className='banner-img'>
                    <img src='assets/imgs/banner/banner-1.png' alt='' />
                    <div className='banner-text'>
                      <h4>
                        Everyday Fresh &amp; <br />
                        Clean with Our
                        <br />
                        Products
                      </h4>
                      <a href='shop-grid-right.html' className='btn btn-xs'>
                        Shop Now <i className='fi-rs-arrow-small-right' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='banner-img'>
                    <img src='assets/imgs/banner/banner-2.png' alt='' />
                    <div className='banner-text'>
                      <h4>
                        Make your Breakfast
                        <br />
                        Healthy and Easy
                      </h4>
                      <a href='shop-grid-right.html' className='btn btn-xs'>
                        Shop Now <i className='fi-rs-arrow-small-right' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 d-md-none d-lg-flex'>
                  <div className='banner-img mb-sm-0'>
                    <img src='assets/imgs/banner/banner-3.png' alt='' />
                    <div className='banner-text'>
                      <h4>
                        The best Organic <br />
                        Products Online
                      </h4>
                      <a href='shop-grid-right.html' className='btn btn-xs'>
                        Shop Now <i className='fi-rs-arrow-small-right' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*End banners*/}
          </div>
          <div className='col-lg-1-5 primary-sidebar sticky-sidebar pt-30'>
            <div className='sidebar-widget widget-category-2 mb-30'>
              <h5 className='section-title style-1 mb-30'>Category</h5>
              <ul>
                <li>
                  <a href='shop-grid-right.html'>
                    {' '}
                    <img src='assets/imgs/theme/icons/category-1.svg' alt='' />
                    Milks &amp; Dairies
                  </a>
                  <span className='count'>30</span>
                </li>
                <li>
                  <a href='shop-grid-right.html'>
                    {' '}
                    <img src='assets/imgs/theme/icons/category-2.svg' alt='' />
                    Clothing
                  </a>
                  <span className='count'>35</span>
                </li>
                <li>
                  <a href='shop-grid-right.html'>
                    {' '}
                    <img src='assets/imgs/theme/icons/category-3.svg' alt='' />
                    Pet Foods{' '}
                  </a>
                  <span className='count'>42</span>
                </li>
                <li>
                  <a href='shop-grid-right.html'>
                    {' '}
                    <img src='assets/imgs/theme/icons/category-4.svg' alt='' />
                    Baking material
                  </a>
                  <span className='count'>68</span>
                </li>
                <li>
                  <a href='shop-grid-right.html'>
                    {' '}
                    <img src='assets/imgs/theme/icons/category-5.svg' alt='' />
                    Fresh Fruit
                  </a>
                  <span className='count'>87</span>
                </li>
              </ul>
            </div>
            {/* Fillter By Price */}
            <div className='sidebar-widget price_range range mb-30'>
              <h5 className='section-title style-1 mb-30'>Fill by price</h5>
              <div className='price-filter'>
                <div className='price-filter-inner'>
                  <div id='slider-range' className='mb-20' />
                  <div className='d-flex justify-content-between'>
                    <div className='caption'>
                      From:{' '}
                      <strong id='slider-range-value1' className='text-brand' />
                    </div>
                    <div className='caption'>
                      To:{' '}
                      <strong id='slider-range-value2' className='text-brand' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='list-group'>
                <div className='list-group-item mb-10 mt-10'>
                  <label className='fw-900'>Color</label>
                  <div className='custome-checkbox'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='checkbox'
                      id='exampleCheckbox1'
                      defaultValue
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleCheckbox1'
                    >
                      <span>Red (56)</span>
                    </label>
                    <br />
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='checkbox'
                      id='exampleCheckbox2'
                      defaultValue
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleCheckbox2'
                    >
                      <span>Green (78)</span>
                    </label>
                    <br />
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='checkbox'
                      id='exampleCheckbox3'
                      defaultValue
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleCheckbox3'
                    >
                      <span>Blue (54)</span>
                    </label>
                  </div>
                  <label className='fw-900 mt-15'>Item Condition</label>
                  <div className='custome-checkbox'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='checkbox'
                      id='exampleCheckbox11'
                      defaultValue
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleCheckbox11'
                    >
                      <span>New (1506)</span>
                    </label>
                    <br />
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='checkbox'
                      id='exampleCheckbox21'
                      defaultValue
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleCheckbox21'
                    >
                      <span>Refurbished (27)</span>
                    </label>
                    <br />
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='checkbox'
                      id='exampleCheckbox31'
                      defaultValue
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleCheckbox31'
                    >
                      <span>Used (45)</span>
                    </label>
                  </div>
                </div>
              </div>
              <a href='shop-grid-right.html' className='btn btn-sm btn-default'>
                <i className='fi-rs-filter mr-5' /> Fillter
              </a>
            </div>
            {/* Product sidebar Widget */}
            <div className='sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10'>
              <h5 className='section-title style-1 mb-30'>New products</h5>
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
                    <div className='product-rating' style={{ width: '90%' }} />
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
                    <div className='product-rating' style={{ width: '80%' }} />
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
                    <div className='product-rating' style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className='banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none'>
              <img src='assets/imgs/banner/banner-11.png' alt='' />
              <div className='banner-text'>
                <span>Oganic</span>
                <h4>
                  Save 17% <br />
                  on <span className='text-brand'>Oganic</span>
                  <br />
                  Juice
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='popular-categories section-padding'>
        <div className='container'>
          <div className='section-title'>
            <div className='title'>
              <h3>Shop by Categories</h3>
              <a className='show-all' href='shop-grid-right.html'>
                All Categories
                <i className='fi-rs-angle-right' />
              </a>
            </div>
            <div
              className='slider-arrow slider-arrow-2 flex-right carausel-8-columns-arrow'
              id='carausel-8-columns-arrows'
            />
          </div>
          <div className='carausel-8-columns-cover position-relative'>
            <div className='carausel-8-columns' id='carausel-8-columns'>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-1.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>
                    Milks and <br />
                    Dairies
                  </a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-2.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>
                    Wines &amp; <br />
                    Alcohol
                  </a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-3.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>
                    Clothing &amp; <br />
                    Beauty
                  </a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-4.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>
                    Pet Foods <br />
                    &amp; Toy
                  </a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-5.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>
                    Packaged <br />
                    fast food
                  </a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-6.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>
                    Baking <br />
                    material
                  </a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-7.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>
                    Vegetables <br />
                    &amp; tubers
                  </a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-8.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>
                    Fresh <br />
                    Seafood
                  </a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-9.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>
                    Noodles <br />
                    Rice
                  </a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-10.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>Fastfood</a>
                </h6>
              </div>
              <div className='card-1'>
                <figure className='img-hover-scale overflow-hidden'>
                  <a href='shop-grid-right.html'>
                    <img src='assets/imgs/theme/icons/category-11.svg' alt='' />
                  </a>
                </figure>
                <h6>
                  <a href='shop-grid-right.html'>Ice cream</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End category slider*/}
      <section className='section-padding mb-30'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0'>
              <h4 className='section-title style-1 mb-30 animated animated'>
                Top Selling
              </h4>
              <div className='product-list-small animated animated'>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-1.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Nestle Original Coffee-Mate Coffee Creamer
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-2.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Nestle Original Coffee-Mate Coffee Creamer
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-3.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Nestle Original Coffee-Mate Coffee Creamer
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 mb-md-0'>
              <h4 className='section-title style-1 mb-30 animated animated'>
                Trending Products
              </h4>
              <div className='product-list-small animated animated'>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-4.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Organic Cage-Free Grade A Large Brown Eggs
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-5.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-6.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Naturally Flavored Cinnamon Vanilla Light Roast Coffee
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block'>
              <h4 className='section-title style-1 mb-30 animated animated'>
                Recently added
              </h4>
              <div className='product-list-small animated animated'>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-7.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Pepperidge Farm Farmhouse Hearty White Bread
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-8.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Organic Frozen Triple Berry Blend
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-9.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Oroweat Country Buttermilk Bread
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block'>
              <h4 className='section-title style-1 mb-30 animated animated'>
                Top Rated
              </h4>
              <div className='product-list-small animated animated'>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-10.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Foster Farms Takeout Crispy Classic Buffalo Wings
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-11.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
                <article className='row align-items-center hover-up'>
                  <figure className='col-md-4 mb-0'>
                    <a href='shop-product-right.html'>
                      <img src='assets/imgs/shop/thumbnail-12.jpg' alt='' />
                    </a>
                  </figure>
                  <div className='col-md-8 mb-0'>
                    <h6>
                      <a href='shop-product-right.html'>
                        All Natural Italian-Style Chicken Meatballs
                      </a>
                    </h6>
                    <div className='product-rate-cover'>
                      <div className='product-rate d-inline-block'>
                        <div
                          className='product-rating'
                          style={{ width: '90%' }}
                        />
                      </div>
                      <span className='font-small ml-5 text-muted'> (4.0)</span>
                    </div>
                    <div className='product-price'>
                      <span>$32.85</span>
                      <span className='old-price'>$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End 4 columns*/}
    </main>
  );
};

export default HomePage;
