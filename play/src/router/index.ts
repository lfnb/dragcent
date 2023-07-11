/*
 * @Author: liyafei
 * @Date: 2022-12-21 11:50:56
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'

import main from '@/views/index.vue';
import image from '@/views/image.vue';
import coupon from '@/views/coupon.vue';
import couponPack from '@/views/couponPack.vue';
import banner from '@/views/banner.vue';
import goods from '@/views/goods.vue';
import tabs from '@/views/tabs.vue';
import rank from '@/views/rank.vue';
import filter from '@/views/filter.vue';
import goodsTag from '@/views/goodsTag.vue';
import goodsRank from '@/views/goodsRank.vue';
import textareaView from '@/views/textareaView.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: main
    },
    {
        path: '/image',
        name: 'image',
        component: image
    },
    {
        path: '/coupon',
        name: 'coupon',
        component: coupon
    },
    {
        path: '/couponPack',
        name: 'couponPack',
        component: couponPack
    },
    {
        path: '/banner',
        name: 'banner',
        component: banner
    },
    {
        path: '/goods',
        name: 'goods',
        component: goods
    },
    {
        path: '/tabs',
        name: 'tabs',
        component: tabs
    },
    {
        path: '/rank',
        name: 'rank',
        component: rank
    },
    {
        path: '/filter',
        name: 'filter',
        component: filter
    },
    {
        path: '/goodsTag',
        name: 'goodsTag',
        component: goodsTag
    },
    {
        path: '/goodsRank',
        name: 'goodsRank',
        component: goodsRank
    },
    {
        path: '/textareaView',
        name: 'textareaView',
        component: textareaView
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router