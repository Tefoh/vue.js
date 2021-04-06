<template>
  <div>
    <div id="modal__gallery" class="modal" v-show="isShowingModal">
        <div class="modal__content">
            <span class="modal__close" @click="closeModal">&times;</span>
            <div class="modal__body" tabindex="0" @focusout="closeModal">
                <img :src="modalImage" class="show__gallery">
            </div>
        </div>
    </div>
    <main class="main">
        <div class="container">
            <ul class="breadcrumb">
                <li class="breadcrumb__item breadcrumb__item--hide"><a href="" class="breadcrumb__link"><span
                        class="breadcrumb__span">صفحه اصلی</span></a></li>
                <li class="breadcrumb__item"><a href="" class="breadcrumb__link"><span class="breadcrumb__span">فهرست محصولات</span></a>
                </li>
                <li class="breadcrumb__item"><a href="" class="breadcrumb__link"><span class="breadcrumb__span">محصول شماره یک</span></a>
                </li>
            </ul>
            <div class="product">
                <div class="product__header">
                    <div class="product__expiration">
                        <div class="count-down__timer" id="count-dowm__timer">
                          {{ diff }}
                        </div>
                    </div>
                    <div class="product__row">

                    <div class="prodcut__gallery">
                      <div class="gallery">
                        <div class="gallery__slideshow">
                          
                          <span class="gallery__count">
                              <span class="gallery__number1">{{ slideIndex + 1 }}</span>
                              <span class="gallery__number2">{{ gallerySlides.length }}</span>
                          </span>
                          <div class="gallery__slides">
                              <div class="gallery__slide">
                                <img
                                  class="gallery__img"
                                  :src="slide.img"
                                  alt=""
                                  v-for="(slide, index) in gallerySlides"
                                  :key="index"
                                  :style="slideIndex === index ? 'display:block;' : 'display:none;'"
                                  @click="showModal(slide.img)"
                                />
                              </div>
                          </div>
                          <a @click.prevent="move(-1)" class="gallery__prev">&#10094;</a>
                          <a @click.prevent="move(1)" class="gallery__next">&#10095;</a>
                        </div>
                        <div class="gallery__content">
                            <div class="gallery__items">
                              <div
                                class="gallery__item"
                                :class="{ 'gallery__item--is-acitve': slideIndex === index }"
                                v-for="(slide, index) in gallerySlides"
                                :key="`item-${index}`"
                              >
                                <img :src="slide.img" @click="currentSlide(index)" class="gallery__item-img">
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="product__left">
                      <div class="product__category">دسته وب</div>
                        <div class="product__info">
                            <h1 class="product__title">محصول شماره یک یک شماره </h1>

                            <div class="rating">
                                <div class="rating__star">
                                    <span
                                      class="rating__rate"
                                      :data-title="rate.title"
                                      v-for="rate in ratings"
                                      :key="rate.title"
                                      @click="rateWidth = rate.width"
                                      @mouseover="handleMouseover"
                                      @mouseleave="handleMouseleave"
                                    ></span>
                                </div>
                                <div class="rating__fstar" :style="showRate ? `width: ${rateWidth}%` : ''">
                                    <span class="rating__frate"></span>
                                    <span class="rating__frate"></span>
                                    <span class="rating__frate"></span>
                                    <span class="rating__frate"></span>
                                    <span class="rating__frate"></span>
                                </div>
                            </div>
                            <div class="rating-star">4.5
                                <span class="rating__num">(65)</span>
                            </div>
                        </div>
                        <div class="controls">
                          <Multiselect
                            :options="colorsOptions"
                            v-model="selectedColor"
                            placeholder="گزینه خود را انتخاب کنید"
                          />
                          <Multiselect
                            :options="langOptions"
                            v-model="selectedLang"
                            :multiple="true"
                            label="name"
                            placeholder="گزینه خود را انتخاب کنید"
                          />

                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <SwiperSlider>
              <template v-slot:title>
                محصولات مرتبط
              </template>
              <a href="product.html" class="swiper-slide" v-for="item in 6" :key="item">
                    <div class="slider__box">
                        <div class="slider__image"><img :src="require(`../assets/img/slider/${item}.jpg`)" alt="" class="slider__img"></div>
                        <div class="slider__title2">
                            گوشی موبایل سامسونگ مدل نوت 20
                        </div>
                        <div class="slider__price">
                            <span class="slider__compare-price">12,200,000</span>
                            <span class="slider__total-price">12,400,000 تومان</span>
                        </div>
                        <span class="slider__discount">%6</span>
                    </div>
                </a>
            </SwiperSlider>
            <div class="product-details">
            <div class="tab">
                <div class="tab__items">
                    <span class="tab__item tab__item--compare"
                      :class="{ 'tab__item--is-active': activeTab === 'compare' }"
                      @click="activeTab = 'compare'"
                    >نقد و برسی</span>
                    <span class="tab__item tab__item--featrues"
                      :class="{ 'tab__item--is-active': activeTab === 'featrues' }"
                      @click="activeTab = 'featrues'"
                    >ویژیگی ها</span>
                    <span class="tab__item tab__item--comments"
                      :class="{ 'tab__item--is-active': activeTab === 'comments' }"
                      @click="activeTab = 'comments'"
                    >نظرات</span>
                </div>
                <div class="tab__sections">
                    <section class="tab__section tab__section--compare" :style="activeTab === 'compare' ? 'display:block;': 'display:none;'">
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و <a href="#"
                                                                                                    style="user-select: auto;">برای
                                شرایط فعلی تکنولوژی</a> مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است. <strong>چاپگرها و متون بلکه روزنامه</strong> و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی <s>مورد نیاز و کاربردهای</s> متنوع با هدف بهبود ابزارهای
                            کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                            طراحان
                            گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                            فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با <u>هدف بهبود ابزارهای
                                کاربردی می باشد</u>.</p>
                        <h1>سرتیتر بزرگ از نوع h1</h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
                            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. <em>چاپگرها
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</em></p>
                        <h2>سرتیتر h2</h2>
                        <blockquote>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                بهبود ابزارهای کاربردی می باشد.
                            </p>
                        </blockquote>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد.&nbsp;لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                            با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد
                            نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.&nbsp;لورم ایپسوم متن ساختگی با
                            تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                            روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد.</p>
                        <hr>
                        <p><strong>سرتیتر درشت</strong></p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد.</p>
                        <ul>
                            <li>گزینه ی اول فهرست بدون شماره</li>
                            <li>گزینه ی دوم برای نمونه</li>
                            <li>گزینه ی سود</li>
                            <li>الی آخر...</li>
                        </ul>
                        <h3>سرتیتر h3</h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از <span style="color: rgb(226, 80, 65);">صنعت چاپ و با استفاده</span>
                            از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                            برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن
                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                            بلکه روزنامه و مجله در ستون و سطرآنچنان
                            که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                            کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                            طراحان گرافیک است. چاپگرها و متون بلکه
                            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        <h4>
                            سرتیتر h4</h4>
                        <ol>
                            <li>گزینه ی اول از فهرست مرتب</li>
                            <li>گزینه ی دوم برای نمونه</li>
                            <li>گزینه ی سوم</li>
                            <li>الی آخر...</li>
                        </ol>
                        <p>Est ut equidem facilis nominavi, ei decore menandri salutandi eam, in mei doming recusabo.
                            Detracto deleniti instructior ad pri. Tincidunt maiestatis scribentur id ius, pri ferri
                            brute atqui id. No cum affert euripidis, vix
                            clita molestie an. In eos tempor eripuit consulatu, at probo porro officiis nec, sumo tation
                            persius cu nam. Ad usu ancillae suavitate. Ex suas tamquam ius.</p>
                        <pre>کد دستوری در این‌جا قرار می‌گیرد.</pre>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
                            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                            مجله در ستون و سطرآنچنان که لازم است و
                            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد.</p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.<img src="img/reactjs.png"></p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
                            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                            مجله در ستون و سطرآنچنان که لازم است و
                            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد.</p>

                    </section>
                    <section class="tab__section tab__section--featrues" :style="activeTab === 'featrues' ? 'display:block;': 'display:none;'">
                        <div class="tab__section-field">
                            <div class="col-3">
                                <h6 class="tab__section-name">ویژیگی 1</h6>
                            </div>
                            <div class="col-9">
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                            </div>
                        </div>
                        <div class="tab__section-field">
                            <div class="col-3">
                                <h6 class="tab__section-name">ویژیگی 1</h6>
                            </div>
                            <div class="col-9">
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                            </div>
                        </div>
                        <div class="tab__section-field">
                            <div class="col-3">
                                <h6 class="tab__section-name">ویژیگی 1</h6>
                            </div>
                            <div class="col-9">
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                            </div>
                        </div>
                        <div class="tab__section-field">
                            <div class="col-3">
                                <h6 class="tab__section-name">ویژیگی 1</h6>
                            </div>
                            <div class="col-9">
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                            </div>
                        </div>
                        <div class="tab__section-field">
                            <div class="col-3">
                                <h6 class="tab__section-name">ویژیگی 1</h6>
                            </div>
                            <div class="col-9">
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                            </div>
                        </div>
                        <div class="tab__section-field">
                            <div class="col-3">
                                <h6 class="tab__section-name">ویژیگی 1</h6>
                            </div>
                            <div class="col-9">
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                            </div>
                        </div>
                        <div class="tab__section-field">
                            <div class="col-3">
                                <h6 class="tab__section-name">ویژیگی 1</h6>
                            </div>
                            <div class="col-9">
                                <div class="tab__section-value">متن کوتاه قرار بگیرد</div>
                            </div>
                        </div>
                    </section>
                    <section class="tab__section tab__section--comments" :style="activeTab === 'comments' ? 'display:block;': 'display:none;'">
                        <div class="comments" id="comments">
                            <div class="comments__send">
                                <div class="comments__title">
                                    <h3 class="comments__h3">دیدگاه خود را بنویسد</h3>
                                    <span class="comments__count">دیدگاه ها ( 150 )</span>
                                </div>
                                <textarea class="txt txt--textarea" placeholder="بنویسد"></textarea>
                                <button class="btn btn--brand btn--boxshadow">ارسال نظر</button>
                                <button class="btn btn--cancel btn--boxshadow-cancel">انصراف</button>
                            </div>
                        </div>

                        <div class="comments__list">
                            <div id="comment__1">
                                <div class="comments__box">
                                    <div class="comments__inner">
                                        <div class="comments__header">
                                            <div class="comments__row">
                                                <div class="comments__info">
                                                    <div class="comments__avatar"><img src="img/profile.jpg" class="comments__img" alt=""></div>
                                                    <div class="comments__details">
                                                        <h5 class="comments__author"><span class="comments__author-name">محمد نیکو</span></h5>
                                                        <span class="comments__date">555 روز پیش</span>
                                                    </div>
                                                </div>
                                                <a href="#comments" class="btn btn--brand btn--reply btn--boxshadow">پاسخ</a>
                                            </div>
                                        </div>
                                        <div class="comments__body">
                                            لورم ایپسوم متـــــــــــــــــــــــــــــــــــــــــــــــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="comment__2">
                                <div class="comments__box">
                                    <div class="comments__inner">
                                        <div class="comments__header">
                                            <div class="comments__row">
                                                <div class="comments__info">
                                                    <div class="comments__avatar"><img src="img/profile.jpg" class="comments__img" alt=""></div>
                                                    <div class="comments__details">
                                                        <h5 class="comments__author"><span class="comments__author-name">محمد نیکو</span></h5>
                                                        <span class="comments__date">555 روز پیش</span>
                                                    </div>
                                                </div>
                                                <a href="#comments" class="btn btn--brand btn--reply btn--boxshadow">پاسخ</a>
                                            </div>
                                        </div>
                                        <div class="comments__body">
                                            لورم ایپسوم متـــــــــــــــــــــــــــــــــــــــــــــــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                        </div>
                                    </div>
                                    <div class="comments__subset">
                                        <div id="comment__3">
                                            <div class="comments__box">
                                                <div class="comments__inner">
                                                    <div class="comments__header">
                                                        <div class="comments__row">
                                                            <div class="comments__info">
                                                                <div class="comments__avatar"><img src="img/profile.jpg" class="comments__img" alt=""></div>
                                                                <div class="comments__details">
                                                                    <h5 class="comments__author"><span class="comments__author-name">محمد نیکو</span></h5>
                                                                    <span class="comments__date">555 روز پیش</span>
                                                                </div>
                                                            </div>
                                                            <a href="#comments" class="btn btn--brand btn--reply btn--boxshadow">پاسخ</a>
                                                        </div>
                                                    </div>
                                                    <div class="comments__body">
                                                        لورم ایپسوم متـــــــــــــــــــــــــــــــــــــــــــــــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

                                                    </div>
                                                </div>
                                                <div class="comments__subset">
                                                    <div id="comment__4">
                                                        <div class="comments__box">
                                                            <div class="comments__inner">
                                                                <div class="comments__header">
                                                                    <div class="comments__row">
                                                                        <div class="comments__info">
                                                                            <div class="comments__avatar"><img src="img/profile.jpg" class="comments__img" alt=""></div>
                                                                            <div class="comments__details">
                                                                                <h5 class="comments__author"><span class="comments__author-name">محمد نیکو</span></h5>
                                                                                <span class="comments__date">555 روز پیش</span>
                                                                            </div>
                                                                        </div>
                                                                        <a href="#comments" class="btn btn--brand btn--reply btn--boxshadow">پاسخ</a>
                                                                    </div>
                                                                </div>
                                                                <div class="comments__body">
                                                                    لورم ایپسوم متـــــــــــــــــــــــــــــــــــــــــــــــــــن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
        </div>
    </main>
  </div>
</template>

<script>
import SwiperSlider from '../components/SwiperSlider'
import moment from 'moment'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import '../assets/css/modal.css'

import Multiselect from 'vue-multiselect'

export default {
  name: "Product",

  components: {
    Multiselect,
    SwiperSlider
  },

  metaInfo: {
    title: 'نمایش محصول'
  },

  data() {
    return {
      dateCountDown: moment('2021-08-07 00:00:00'),
      diff: null,
      countDownInterval: null,
      gallerySlides: [
        { img: require('../assets/img/slider/1.jpg') },
        { img: require('../assets/img/slider/2.jpg') },
        { img: require('../assets/img/slider/3.jpg') },
        { img: require('../assets/img/slider/4.jpg') },
        { img: require('../assets/img/slider/4.jpg') },
        { img: require('../assets/img/slider/3.jpg') },
        { img: require('../assets/img/slider/3.jpg') },
        { img: require('../assets/img/slider/3.jpg') },
      ],
      ratings: [
        { width: 100, title: 'عالی' },
        { width: 80, title: 'خوب' },
        { width: 60, title: 'معمولی' },
        { width: 40, title: 'ضعیف' },
        { width: 20, title: 'بد' },
      ],
      slideIndex: 0,
      isShowingModal: false,
      modalImage: null,
      rateWidth: 0,
      showRate: true,
      selectedColor: '',
      colorsOptions: ['قرمز', 'سبز', 'آبی'],
      selectedLang: [],
      langOptions: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ],
      slides: [
        { img: require('../assets/img/slideshow/1.png') },
        { img: require('../assets/img/slideshow/2.png') },
        { img: require('../assets/img/slideshow/3.png') },
        { img: require('../assets/img/slideshow/4.png') },
      ],
      activeTab: 'compare'
    }
  },

  methods: {
    move(n) {
      if (this.gallerySlides.length <= this.slideIndex + n) {
        this.slideIndex = 0;
      } else if (this.slideIndex + n < 0) {
        this.slideIndex = (this.gallerySlides.length - 1);
      } else {
        this.slideIndex += n
      }
    },
    currentSlide(index) {
      this.slideIndex = index
    },
    showModal(image) {
      this.isShowingModal = true
      this.modalImage = image
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.isShowingModal = false
      document.body.style.overflow = 'unset'
    },
    handleMouseover() {
      this.showRate = false
    },
    handleMouseleave() {
      this.showRate = true
    }
  },

  created() {
    this.countDownInterval = setInterval(() => {
      let diffTime = this.dateCountDown.diff(moment())
      let durationTime = moment.duration(diffTime)
      this.diff = `${Math.floor(durationTime.asDays())}:${durationTime.hours()}:${durationTime.minutes()}:${durationTime.seconds()}`
    }, 1000)
  },

  destroyed() {
    clearInterval(this.countDownInterval)
  }
  
}
</script>
