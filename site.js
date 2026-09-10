        /* ===================================================================
           站点配置  ——  改这里就能全站生效
        =================================================================== */
        const CONFIG = {
            siteName: 'aizhichong.cc',                    // 品牌名（导航、Hero、页脚自动替换）
            shopUrl:  'http://i8c.cn/kd9Ml',               // 购买入口
            wechat:   'tuanzi0897',                       // 客服微信号（复制按钮 + 显示文本）
            adsConversion: ''                            // Google Ads 转化代码，形如 'AW-1234567890/AbC-dEf_gh12ijk'；留空则只上报 GA4
        };

        // 应用配置
        document.querySelectorAll('[data-site-name]').forEach(el => el.textContent = CONFIG.siteName);
        document.querySelectorAll('[data-shop-link]').forEach(el => el.href = CONFIG.shopUrl);
        document.querySelectorAll('[data-wechat]').forEach(el => el.textContent = CONFIG.wechat);

        // 复制任意文本（用于客服微信、备用微信等）
        function copyText(text) {
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(() => showToast('已复制：' + text)).catch(() => fallbackCopy(text));
            } else {
                fallbackCopy(text);
            }
        }
        // 复制主客服微信号
        function copyWechat() { copyText(CONFIG.wechat); }
        function fallbackCopy(text) {
            const ta = document.createElement('textarea');
            ta.value = text; document.body.appendChild(ta); ta.select();
            try { document.execCommand('copy'); showToast('微信号已复制！'); }
            catch (e) { showToast('复制失败，请手动复制：' + text); }
            document.body.removeChild(ta);
        }

        // 收藏提醒弹窗：首次访问延迟出现，关闭或点击"立即收藏"后本机记忆，不再重复提醒
        (function () {
            var KEY = 'aizhichong_bookmark_prompt_seen';
            var el = document.getElementById('bookmarkPrompt');
            if (!el) return;
            var seen = false;
            try { seen = !!localStorage.getItem(KEY); } catch (e) {}
            if (seen) return;
            setTimeout(function () { el.classList.add('is-visible'); }, 2500);
        })();
        function dismissBookmarkPrompt() {
            var el = document.getElementById('bookmarkPrompt');
            if (el) el.classList.remove('is-visible');
            try { localStorage.setItem('aizhichong_bookmark_prompt_seen', '1'); } catch (e) {}
        }

        // 收藏本站：浏览器已不允许网页脚本直接添加书签，改为复制网址 + 提示快捷键/操作路径
        function bookmarkSite() {
            var url = location.origin + '/';
            var ua = navigator.userAgent;
            var isMobile = /Android|iPhone|iPad|iPod/i.test(ua);
            var isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || ua);
            var msg = isMobile
                ? '网址已复制！可"收藏"或"添加到主屏幕"'
                : '网址已复制！按 ' + (isMac ? '⌘+D' : 'Ctrl+D') + ' 收藏本站';
            function afterCopy() { showToast(msg); }
            function legacyCopy() {
                var ta = document.createElement('textarea');
                ta.value = url; document.body.appendChild(ta); ta.select();
                try { document.execCommand('copy'); } catch (e) {}
                document.body.removeChild(ta);
                afterCopy();
            }
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(url).then(afterCopy).catch(legacyCopy);
            } else {
                legacyCopy();
            }
        }

        // Toast 提示
        function showToast(msg) {
            const t = document.createElement('div');
            t.className = 'toast'; t.textContent = msg;
            document.body.appendChild(t);
            setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2000);
        }

        // 锚点平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
            });
        });

        // 移动端导航可横向滑动提示（一次性轻微抖动）
        (function(){            // nav-scroll-hint
            var nl=document.querySelector('.nav-links');
            if(nl && window.innerWidth<=768 && nl.scrollWidth > nl.clientWidth+8){
                setTimeout(function(){
                    nl.scrollTo({left:48,behavior:'smooth'});
                    setTimeout(function(){ nl.scrollTo({left:0,behavior:'smooth'}); }, 650);
                }, 1000);
            }
        })();

        /* ===================================================================
           购买入口点击上报  ——  GA4 事件 click_shop
           下单在外部商城完成，本站能测到的最后一步就是"点击去商城"
        =================================================================== */
        (function () {
            var links = document.querySelectorAll('[data-shop-link]');
            if (!links.length) return;

            // 入口所在区块，用来对比哪个位置的按钮更有效
            function placement(el) {
                if (el.closest('nav')) return 'nav';
                if (el.closest('.hero')) return 'hero';
                if (el.closest('.category-card')) return 'category';
                if (el.closest('.extra-card--reseller')) return 'reseller';
                if (el.closest('#pricing')) return 'pricing';
                if (el.closest('footer')) return 'footer';
                return 'other';
            }

            // 具体套餐名（价格卡 / 首页产品卡），取不到就留空
            function plan(el) {
                var card = el.closest('.pkg-card') || el.closest('.category-card');
                var name = card && card.querySelector('.pkg-name, .category-name');
                return name ? name.textContent.replace(/\s+/g, ' ').trim().slice(0, 60) : '';
            }

            // 按钮文案：整卡可点的入口取卡内标题，其余取按钮自身文字
            function label(el) {
                var src = el.querySelector('.category-link') || el.querySelector('.extra-card-title') || el;
                return src.textContent.replace(/\s+/g, ' ').trim().slice(0, 60);
            }

            links.forEach(function (el) {
                el.addEventListener('click', function () {
                    if (typeof gtag !== 'function') return;
                    gtag('event', 'click_shop', {
                        link_text: label(el),
                        placement: placement(el),
                        plan: plan(el),
                        page_path: location.pathname
                    });
                    // 填了 CONFIG.adsConversion 之后，同一次点击也会直接上报给 Google Ads
                    if (CONFIG.adsConversion) {
                        gtag('event', 'conversion', { send_to: CONFIG.adsConversion });
                    }
                }, { passive: true });
            });
        })();

        // 移动端导航右缘箭头指示（可滑动）
        (function(){
            var nl=document.querySelector('.nav-links');
            var inner=document.querySelector('.nav-inner');
            var acts=document.querySelector('.nav-actions');
            if(!(nl && inner && window.innerWidth<=768 && nl.scrollWidth > nl.clientWidth+8)) return;
            inner.style.position='relative';
            var arr=document.createElement('span');
            arr.className='nav-scroll-arrow';
            arr.textContent='\u203A';
            arr.style.right=((acts?acts.offsetWidth:60)+6)+'px';
            inner.appendChild(arr);
            nl.addEventListener('scroll',function(){
                var atEnd = nl.scrollLeft + nl.clientWidth >= nl.scrollWidth - 12;
                arr.style.opacity = atEnd ? '0' : '1';
            },{passive:true});
        })();
