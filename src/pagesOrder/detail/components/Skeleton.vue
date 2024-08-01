<template name="skeleton">
    <view class="sk-container">
      <view class="navbar navbar" style="padding-top:47px">
        <view class="wrap wrap">
          <navigator class="back icon-home sk-pseudo sk-pseudo-circle" open-type="switchTab"></navigator>
          <view class="title sk-transparent sk-text-14-2857-622 sk-text">订单详情</view>
        </view>
      </view>
      <scroll-view :scroll-y="true" class="viewport viewport" id="scroller" :enable-back-to-top="true">
        <view class="overview sk-image" style="padding-top:67px">
          <view class="status icon-clock sk-transparent sk-text-0-0000-379 sk-text sk-pseudo sk-pseudo-circle">等待付款</view>
          <view class="tips sk-transparent">
            <text class="money sk-transparent sk-text-0-0000-525 sk-text">应付金额: ¥ 99.00</text>
            <text class="time sk-transparent sk-text-0-0000-690 sk-text">支付剩余</text> 00 时 29 分 59 秒 </view>
          <view class="button sk-transparent sk-text-28-1250-844 sk-text" style="background-position-x: 50%;">去支付</view>
        </view>
        <view class="shipment shipment">
          <view class="item sk-image">
            <view class="message sk-transparent sk-text-14-2857-731 sk-text"> 您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。 </view>
            <view class="date sk-transparent sk-text-14-2857-58 sk-text"> 2023-04-14 13:14:20 </view>
          </view>
          <view class="locate sk-image">
            <view class="user sk-transparent sk-text-14-2857-485 sk-text"> 张三 13333333333 </view>
            <view class="address sk-transparent sk-text-14-2857-45 sk-text"> 广东省 广州市 天河区 黑马程序员 </view>
          </view>
        </view>
        <view class="goods goods">
          <view class="item item">
            <navigator class="navigator navigator" hover-class="none">
              <image class="cover sk-image"></image>
              <view class="meta meta">
                <view class="name ellipsis sk-transparent sk-text-14-2857-808 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
                <view class="type sk-transparent sk-text-22-2222-245 sk-text">藏青小花， 130</view>
                <view class="price price">
                  <view class="actual actual">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="sk-transparent sk-text-14-2857-373 sk-text">99.00</text>
                  </view>
                </view>
                <view class="quantity sk-transparent sk-opacity">x1</view>
              </view>
            </navigator>
            <navigator class="navigator navigator" hover-class="none">
              <image class="cover sk-image"></image>
              <view class="meta meta">
                <view class="name ellipsis sk-transparent sk-text-14-2857-65 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
                <view class="type sk-transparent sk-text-22-2222-417 sk-text">藏青小花， 130</view>
                <view class="price price">
                  <view class="actual actual">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="sk-transparent sk-text-14-2857-828 sk-text">99.00</text>
                  </view>
                </view>
                <view class="quantity sk-transparent sk-opacity">x1</view>
              </view>
            </navigator>
            <view class="action action">
              <view class="button primary sk-transparent sk-text-28-3333-685 sk-text" style="background-position-x: 50%;">申请售后</view>
              <navigator class="button sk-transparent sk-text-28-3333-945 sk-text" style="background-position-x: 50%;"> 去评价 </navigator>
            </view>
          </view>
          <view class="total total">
            <view class="row row">
              <view class="text sk-transparent sk-text-0-0000-375 sk-text">商品总价: </view>
              <view class="symbol sk-transparent sk-text-0-0000-637 sk-text sk-pseudo sk-pseudo-circle">99.00</view>
            </view>
            <view class="row row">
              <view class="text sk-transparent sk-text-0-0000-645 sk-text">运费: </view>
              <view class="symbol sk-transparent sk-text-0-0000-552 sk-text sk-pseudo sk-pseudo-circle">10.00</view>
            </view>
            <view class="row row">
              <view class="text sk-transparent sk-text-0-0000-758 sk-text">应付金额: </view>
              <view class="symbol primary sk-transparent sk-text-0-0000-931 sk-text sk-pseudo sk-pseudo-circle">109.00</view>
            </view>
          </view>
        </view>
        <view class="detail detail">
          <view class="title sk-transparent sk-text-0-0000-903 sk-text">订单信息</view>
          <view class="row row">
            <view class="item sk-transparent"> 订单编号: 1818301032233439233
              <text class="copy sk-transparent sk-text-0-0000-340 sk-text">复制</text>
            </view>
            <view class="item sk-transparent sk-text-0-0000-998 sk-text">下单时间: 2023-04-14 13:14:20</view>
          </view>
        </view>
        <view class="toolbar toolbar" style="padding-bottom:34px">
          <view class="button primary sk-transparent sk-text-14-2857-77 sk-text"> 去支付 </view>
          <view class="button sk-transparent sk-text-14-2857-375 sk-text"> 取消订单 </view>
        </view>
      </scroll-view>
    </view>
  </template>
  <style>
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-622 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-0-0000-379 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-525 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-690 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
  }
.sk-text-28-1250-844 {
    background-image: linear-gradient(transparent 28.1250%, #EEEEEE 0%, #EEEEEE 71.8750%, transparent 0%) !important;
    background-size: 100% 64.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-731 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-58 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-485 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-45 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-808 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-22-2222-245 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 43.2000rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-373 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-65 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-22-2222-417 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 43.2000rpx;
    position: relative !important;
  }
.sk-text-14-2857-828 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-28-3333-685 {
    background-image: linear-gradient(transparent 28.3333%, #EEEEEE 0%, #EEEEEE 71.6667%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-28-3333-945 {
    background-image: linear-gradient(transparent 28.3333%, #EEEEEE 0%, #EEEEEE 71.6667%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-375 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-637 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-645 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-552 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-758 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-931 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-903 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 30.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-340 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 20.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-998 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-77 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-375 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>