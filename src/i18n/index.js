/* index.js 就是处理语言包 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './lang/cn'
import en from './lang/en'
import locale from 'element-ui/lib/locale';

Vue.use(VueI18n)

const i18n = new VueI18n({
    //定义默认语言
    globalInjection: true,
    // locale: 'zh_cn',
    locale: 'zh_cn' || 'en',
    messages: {
        'zh_cn': cn,
        'en': en
    },
    silentTranslationWarn: true          //去掉warning
})

locale.i18n((key, value) => i18n.t(key, value))

export default i18n