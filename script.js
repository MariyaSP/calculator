        (function(){
            // -------------------------- ПРАЙС-ЛИСТ (50 позиций) ---------------------------------
            const priceList = [
                // Аналитика
                { id: 1, name: "Анализ бизнес-требований", desc: "Интервью, брифинг", price: 5000, category: "Аналитика", subcat: "Проектирование" },
                { id: 2, name: "Составление ТЗ", desc: "Согласование технического задания", price: 4000, category: "Аналитика", subcat: "Проектирование" },
                { id: 3, name: "Прототип — главный экран", desc: "Figma", price: 3000, category: "Аналитика", subcat: "Прототипы" },
                { id: 4, name: "Прототип — доп. блок", desc: "За один блок", price: 1500, category: "Аналитика", subcat: "Прототипы", multi: true },
                { id: 5, name: "Структура БД (ER-диаграмма)", desc: "Проектирование базы данных", price: 3500, category: "Аналитика", subcat: "Проектирование" },
                // Дизайн
                { id: 6, name: "Дизайн главного экрана", desc: "Hero-блок", price: 7000, category: "Дизайн", subcat: "Экраны" },
                { id: 7, name: "Дизайн типового блока", desc: "Услуги, преимущества", price: 3500, category: "Дизайн", subcat: "Экраны", multi: true },
                { id: 8, name: "Дизайн формы связи", desc: "Обратная связь", price: 2500, category: "Дизайн", subcat: "Элементы" },
                { id: 9, name: "Дизайн модального окна", desc: "Попап", price: 2000, category: "Дизайн", subcat: "Элементы" },
                { id: 10, name: "Дизайн панели администратора", desc: "Интерфейс", price: 5000, category: "Дизайн", subcat: "Админка" },
                { id: 11, name: "Дизайн элементов (кнопки, иконки)", desc: "5+ элементов", price: 2000, category: "Дизайн", subcat: "Элементы" },
                { id: 12, name: "Адаптация дизайна (планшет)", desc: "768px", price: 2500, category: "Дизайн", subcat: "Адаптив" },
                { id: 13, name: "Адаптация дизайна (телефон)", desc: "375px", price: 2500, category: "Дизайн", subcat: "Адаптив" },
                // Вёрстка
                { id: 14, name: "Вёрстка главного экрана", desc: "Hero", price: 6000, category: "Вёрстка", subcat: "Страницы" },
                { id: 15, name: "Вёрстка типового блока", desc: "За блок", price: 3000, category: "Вёрстка", subcat: "Страницы", multi: true },
                { id: 16, name: "Вёрстка портфолио (сетка)", desc: "2×2", price: 3500, category: "Вёрстка", subcat: "Страницы" },
                { id: 17, name: "Вёрстка формы связи", desc: "HTML/CSS", price: 2500, category: "Вёрстка", subcat: "Элементы" },
                { id: 18, name: "Вёрстка модального окна", desc: "Попап", price: 2000, category: "Вёрстка", subcat: "Элементы" },
                { id: 19, name: "Вёрстка админ-панели", desc: "Таблицы, формы", price: 5000, category: "Вёрстка", subcat: "Админка" },
                { id: 20, name: "Адаптивная вёрстка (планшет)", desc: "CSS media", price: 2500, category: "Вёрстка", subcat: "Адаптив" },
                { id: 21, name: "Адаптивная вёрстка (телефон)", desc: "CSS media", price: 2500, category: "Вёрстка", subcat: "Адаптив" },
                { id: 22, name: "Кроссбраузерная вёрстка", desc: "Chrome, Firefox, Safari", price: 3000, category: "Вёрстка", subcat: "Качество" },
                { id: 23, name: "Валидная вёрстка (W3C)", desc: "Семантика, доступность", price: 2000, category: "Вёрстка", subcat: "Качество" },
                // Фронтенд
                { id: 24, name: "Интерактивные элементы", desc: "Hover, фокус", price: 2000, category: "Фронтенд", subcat: "Анимации" },
                { id: 25, name: "Анимация при скролле", desc: "Появление блоков", price: 2000, category: "Фронтенд", subcat: "Анимации" },
                { id: 26, name: "Валидация формы (клиент)", desc: "Проверка полей", price: 2500, category: "Фронтенд", subcat: "Формы" },
                { id: 27, name: "Отправка AJAX/Fetch", desc: "Без перезагрузки", price: 2500, category: "Фронтенд", subcat: "Формы" },
                { id: 28, name: "Уведомление об отправке", desc: "Toast/alert", price: 1500, category: "Фронтенд", subcat: "Формы" },
                { id: 29, name: "Мобильное меню (бургер)", desc: "Выезжающее меню", price: 3000, category: "Фронтенд", subcat: "Навигация" },
                { id: 30, name: "Фильтрация портфолио", desc: "По категориям", price: 3000, category: "Фронтенд", subcat: "Функции" },
                // Бэкенд
                { id: 31, name: "Настройка серверного окружения", desc: "Локально + тестовый", price: 3000, category: "Бэкенд", subcat: "Инфраструктура" },
                { id: 32, name: "API для отправки формы", desc: "Сохранение в БД", price: 4000, category: "Бэкенд", subcat: "API" },
                { id: 33, name: "Email-уведомление", desc: "При новой заявке", price: 2500, category: "Бэкенд", subcat: "Уведомления" },
                { id: 34, name: "Telegram-уведомление", desc: "Бот", price: 2000, category: "Бэкенд", subcat: "Уведомления" },
                { id: 35, name: "Авторизация в админке", desc: "Сессии/JWT", price: 3500, category: "Бэкенд", subcat: "Админка" },
                { id: 36, name: "CRUD для заявок", desc: "Создание, чтение, обновление, удаление", price: 6000, category: "Бэкенд", subcat: "Админка" },
                { id: 37, name: "Статусы заявок", desc: "Новая/В работе/Завершена", price: 2500, category: "Бэкенд", subcat: "Админка" },
                { id: 38, name: "Интерфейс админ-панели", desc: "Управление заявками", price: 5000, category: "Бэкенд", subcat: "Админка" },
                { id: 39, name: "Фильтрация и поиск", desc: "В админ-панели", price: 2500, category: "Бэкенд", subcat: "Админка" },
                { id: 40, name: "Резервное копирование БД", desc: "Настройка", price: 2000, category: "Бэкенд", subcat: "Безопасность" },
                // Базы данных
                { id: 41, name: "Создание таблиц БД", desc: "Миграции", price: 2500, category: "Базы данных", subcat: "Создание" },
                { id: 42, name: "Настройка соединения с БД", desc: "Конфигурация", price: 1500, category: "Базы данных", subcat: "Настройка" },
                // Инфраструктура
                { id: 43, name: "Регистрация домена", desc: "Без учёта стоимости домена", price: 500, category: "Инфраструктура", subcat: "Домен" },
                { id: 44, name: "Настройка хостинга", desc: "VPS / shared", price: 2500, category: "Инфраструктура", subcat: "Хостинг" },
                { id: 45, name: "Деплой проекта", desc: "Ручной или автоматический", price: 3000, category: "Инфраструктура", subcat: "Деплой" },
                { id: 46, name: "Настройка SSL", desc: "HTTPS", price: 2000, category: "Инфраструктура", subcat: "Безопасность" },
                { id: 47, name: "GitHub репозиторий", desc: "Первый коммит", price: 1000, category: "Инфраструктура", subcat: "Git" },
                { id: 48, name: "Инструкция (README)", desc: "Развёртывание", price: 1500, category: "Инфраструктура", subcat: "Документация" },
                { id: 49, name: "Техподдержка (1 месяц)", desc: "После сдачи", price: 5000, category: "Инфраструктура", subcat: "Поддержка" }
            ];

            // ---------- Состояние ----------
            let selectedItems = {};     // { id: countOrFlag }
            let currentTab = "Аналитика";
            
            // Хранилище позиций скролла для каждой вкладки
            let scrollPositions = {
                "Аналитика": 0,
                "Дизайн": 0,
                "Вёрстка": 0,
                "Фронтенд": 0,
                "Бэкенд": 0,
                "Базы данных": 0,
                "Инфраструктура": 0
            };

            const tabs = [
                { id: "Аналитика", name: "Аналитика", icon: "📐" },
                { id: "Дизайн", name: "Дизайн", icon: "🎨" },
                { id: "Вёрстка", name: "Вёрстка", icon: "📄" },
                { id: "Фронтенд", name: "Фронтенд", icon: "⚡" },
                { id: "Бэкенд", name: "Бэкенд", icon: "⚙️" },
                { id: "Базы данных", name: "Базы данных", icon: "🗄️" },
                { id: "Инфраструктура", name: "Инфраструктура", icon: "☁️" }
            ];

            // Получение контейнера скролла
            function getScrollContainer() {
                return document.getElementById('tabsContentContainer');
            }

            // Сохранить текущую позицию скролла для активной вкладки
            function saveCurrentScrollPosition() {
                const container = getScrollContainer();
                if (container) {
                    scrollPositions[currentTab] = container.scrollTop;
                }
            }

            // Восстановить позицию скролла для указанной вкладки
            function restoreScrollPosition(tabId) {
                const container = getScrollContainer();
                if (container && scrollPositions[tabId] !== undefined) {
                    container.scrollTop = scrollPositions[tabId];
                }
            }

            // ---------- Helper ----------
            function getItemById(id) {
                return priceList.find(i => i.id === id);
            }

            function isItemSelected(id) {
                const val = selectedItems[id];
                if (val === undefined) return false;
                const item = getItemById(id);
                if (item && item.multi) return val > 0;
                return true;
            }

            function getItemCount(id) {
                const val = selectedItems[id];
                if (val === undefined) return 0;
                const item = getItemById(id);
                if (item && item.multi) return val;
                return isItemSelected(id) ? 1 : 0;
            }

            function getItemTotal(id) {
                const item = getItemById(id);
                if (!item) return 0;
                const count = getItemCount(id);
                return item.price * count;
            }

            // Переключение обычной опции
            function toggleRegularItem(id) {
                if (selectedItems[id] !== undefined) {
                    delete selectedItems[id];
                } else {
                    selectedItems[id] = 1;
                }
            }

            // Для мульти: увеличить/уменьшить
            function changeMultiCount(id, delta) {
                const current = selectedItems[id] || 0;
                const newVal = current + delta;
                if (newVal <= 0) {
                    delete selectedItems[id];
                } else {
                    selectedItems[id] = newVal;
                }
            }

            // Полная сумма
            function getTotal() {
                let total = 0;
                for (const idStr in selectedItems) {
                    const id = parseInt(idStr);
                    total += getItemTotal(id);
                }
                return total;
            }

            // Детали для сметы
            function getSelectedDetails() {
                const details = [];
                for (const idStr in selectedItems) {
                    const id = parseInt(idStr);
                    const item = getItemById(id);
                    if (!item) continue;
                    const count = getItemCount(id);
                    if (count === 0) continue;
                    details.push({
                        id: id,
                        name: item.name,
                        category: item.category,
                        count: count,
                        price: item.price * count,
                        unitPrice: item.price,
                        isMulti: !!item.multi
                    });
                }
                return details;
            }

            // ---------- Отрисовка интерфейса с сохранением скролла ----------
            function renderTabsAndOptions() {
                // Сохраняем текущую позицию скролла перед перерисовкой
                saveCurrentScrollPosition();
                
                const headerContainer = document.getElementById('tabsHeader');
                const tabsContainer = document.getElementById('tabsContainer');
                if (!headerContainer || !tabsContainer) return;

                headerContainer.innerHTML = '';
                tabsContainer.innerHTML = '';

                // Рендерим кнопки вкладок
                tabs.forEach(tab => {
                    const btn = document.createElement('button');
                    btn.className = `tab-btn ${currentTab === tab.id ? 'active' : ''}`;
                    btn.innerHTML = `${tab.icon} ${tab.name}`;
                    btn.setAttribute('data-tab-id', tab.id);
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        if (currentTab === tab.id) return;
                        // Сохраняем скролл текущей вкладки перед переключением
                        saveCurrentScrollPosition();
                        currentTab = tab.id;
                        renderTabsAndOptions();  // перерисовка с сохранением выбранных опций
                        renderEstimate();
                        // Восстанавливаем скролл для новой вкладки
                        restoreScrollPosition(currentTab);
                    });
                    headerContainer.appendChild(btn);
                });

                // Группируем позиции по категориям
                const itemsByCategory = {};
                priceList.forEach(item => {
                    if (!itemsByCategory[item.category]) itemsByCategory[item.category] = [];
                    itemsByCategory[item.category].push(item);
                });

                // Для каждой вкладки создаём контент
                tabs.forEach(tab => {
                    const tabDiv = document.createElement('div');
                    tabDiv.className = `tab-content ${currentTab === tab.id ? 'active' : ''}`;
                    tabDiv.id = `tab-${tab.id.replace(/\s/g, '')}`;

                    const categoryItems = itemsByCategory[tab.id] || [];
                    // группируем по subcat
                    const grouped = {};
                    categoryItems.forEach(item => {
                        const sub = item.subcat || "Прочее";
                        if (!grouped[sub]) grouped[sub] = [];
                        grouped[sub].push(item);
                    });

                    for (const [subcat, items] of Object.entries(grouped)) {
                        const subSection = document.createElement('div');
                        subSection.className = 'sub-section';
                        subSection.innerHTML = `<div class="sub-title">📁 ${subcat}</div>`;

                        items.forEach(item => {
                            const isSelected = isItemSelected(item.id);
                            const count = getItemCount(item.id);
                            const totalPrice = getItemTotal(item.id);
                            const optionDiv = document.createElement('div');
                            optionDiv.className = `option-item ${isSelected ? 'selected' : ''}`;
                            optionDiv.setAttribute('data-id', item.id);
                            optionDiv.setAttribute('data-multi', item.multi ? 'true' : 'false');

                            if (item.multi) {
                                // Мульти вариант
                                optionDiv.innerHTML = `
                                    <input type="checkbox" class="option-checkbox" ${count > 0 ? 'checked' : ''}>
                                    <div class="option-info">
                                        <div class="option-name">${escapeHtml(item.name)}</div>
                                        <div class="option-desc">${escapeHtml(item.desc)}</div>
                                    </div>
                                    <div class="multi-controls">
                                        <button class="multi-btn multi-dec" data-id="${item.id}" ${count === 0 ? 'disabled' : ''}>−</button>
                                        <span class="multi-count">${count}</span>
                                        <button class="multi-btn multi-inc" data-id="${item.id}">+</button>
                                    </div>
                                    <div class="option-price">${totalPrice.toLocaleString()} ₽</div>
                                `;
                                // Обработчики для кнопок мульти
                                const decBtn = optionDiv.querySelector('.multi-dec');
                                const incBtn = optionDiv.querySelector('.multi-inc');
                                if (decBtn) {
                                    decBtn.addEventListener('click', (e) => {
                                        e.stopPropagation();
                                        changeMultiCount(item.id, -1);
                                        renderTabsAndOptions();
                                        renderEstimate();
                                    });
                                }
                                if (incBtn) {
                                    incBtn.addEventListener('click', (e) => {
                                        e.stopPropagation();
                                        changeMultiCount(item.id, +1);
                                        renderTabsAndOptions();
                                        renderEstimate();
                                    });
                                }
                            } else {
                                // Обычный вариант
                                optionDiv.innerHTML = `
                                    <input type="checkbox" class="option-checkbox" ${isSelected ? 'checked' : ''}>
                                    <div class="option-info">
                                        <div class="option-name">${escapeHtml(item.name)}</div>
                                        <div class="option-desc">${escapeHtml(item.desc)}</div>
                                    </div>
                                    <div class="option-price">${item.price.toLocaleString()} ₽</div>
                                `;
                            }

                            // Клик по всей строке переключает опцию
                            optionDiv.addEventListener('click', (e) => {
                                // Если клик был именно по кнопке, не обрабатываем
                                if (e.target.classList.contains('multi-btn') || 
                                    e.target.classList.contains('multi-inc') || 
                                    e.target.classList.contains('multi-dec')) {
                                    return;
                                }
                                if (item.multi) {
                                    // Для мульти: если было 0 -> ставим 1, иначе сбрасываем в 0
                                    const currentCount = getItemCount(item.id);
                                    if (currentCount === 0) {
                                        selectedItems[item.id] = 1;
                                    } else {
                                        delete selectedItems[item.id];
                                    }
                                } else {
                                    toggleRegularItem(item.id);
                                }
                                renderTabsAndOptions();
                                renderEstimate();
                            });

                            subSection.appendChild(optionDiv);
                        });
                        tabDiv.appendChild(subSection);
                    }

                    if (categoryItems.length === 0) {
                        const emptyDiv = document.createElement('div');
                        emptyDiv.className = 'empty-details';
                        emptyDiv.innerText = 'Нет доступных опций';
                        tabDiv.appendChild(emptyDiv);
                    }

                    tabsContainer.appendChild(tabDiv);
                });
                
                // Восстанавливаем позицию скролла для текущей вкладки
                restoreScrollPosition(currentTab);
            }

            function renderEstimate() {
                const total = getTotal();
                const totalElem = document.getElementById('totalAmount');
                if (totalElem) totalElem.innerHTML = total.toLocaleString() + ' ₽';

                const details = getSelectedDetails();
                const container = document.getElementById('estimateDetails');
                const statsSpan = document.getElementById('stats');

                if (!container) return;

                if (details.length === 0) {
                    container.innerHTML = '<div class="empty-details">📝 Ничего не выбрано. Отметьте работы на вкладках слева.</div>';
                    if (statsSpan) statsSpan.innerHTML = `Выбрано позиций: 0 | Итого: 0 ₽`;
                    return;
                }

                let html = '';
                details.forEach(d => {
                    if (d.isMulti && d.count > 0) {
                        html += `
                            <div class="detail-item" data-id="${d.id}">
                                <div class="detail-name">
                                    ${escapeHtml(d.name)}
                                    <span class="detail-badge">${d.count} шт × ${d.unitPrice.toLocaleString()} ₽</span>
                                </div>
                                <div class="detail-price">${d.price.toLocaleString()} ₽</div>
                                <div class="remove-item" data-id="${d.id}">✕</div>
                            </div>
                        `;
                    } else {
                        html += `
                            <div class="detail-item" data-id="${d.id}">
                                <div class="detail-name">${escapeHtml(d.name)}</div>
                                <div class="detail-price">${d.price.toLocaleString()} ₽</div>
                                <div class="remove-item" data-id="${d.id}">✕</div>
                            </div>
                        `;
                    }
                });
                container.innerHTML = html;

                // Обработчики удаления из сметы
                document.querySelectorAll('.remove-item').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const id = parseInt(btn.getAttribute('data-id'));
                        if (!isNaN(id)) {
                            delete selectedItems[id];
                            renderTabsAndOptions();
                            renderEstimate();
                        }
                    });
                });

                if (statsSpan) {
                    statsSpan.innerHTML = `Выбрано позиций: ${details.length} | Итого: ${total.toLocaleString()} ₽`;
                }
            }

            function resetAll() {
                saveCurrentScrollPosition();
                selectedItems = {};
                renderTabsAndOptions();
                renderEstimate();
                restoreScrollPosition(currentTab);
            }

            function exportEstimate() {
                const details = getSelectedDetails();
                const total = getTotal();

                let text = '═══════════════════════════════════════════════════\n';
                text += '            СМЕТА НА РАЗРАБОТКУ САЙТА\n';
                text += '═══════════════════════════════════════════════════\n\n';

                if (details.length === 0) {
                    text += '❌ Ничего не выбрано\n';
                } else {
                    const grouped = {};
                    details.forEach(d => {
                        if (!grouped[d.category]) grouped[d.category] = [];
                        grouped[d.category].push(d);
                    });
                    for (const cat in grouped) {
                        text += `📁 ${cat.toUpperCase()}:\n`;
                        grouped[cat].forEach(d => {
                            if (d.isMulti) {
                                text += `   • ${d.name} (${d.count} шт × ${d.unitPrice.toLocaleString()} ₽) = ${d.price.toLocaleString()} ₽\n`;
                            } else {
                                text += `   • ${d.name} = ${d.price.toLocaleString()} ₽\n`;
                            }
                        });
                        text += '\n';
                    }
                    text += '───────────────────────────────────────────────────\n';
                    text += `💰 ИТОГО: ${total.toLocaleString()} ₽\n`;
                    text += '═══════════════════════════════════════════════════\n';
                }
                navigator.clipboard.writeText(text).then(() => alert('✅ Смета скопирована в буфер обмена!'));
            }

            function escapeHtml(str) {
                if (!str) return '';
                return str.replace(/[&<>]/g, function(m) {
                    if (m === '&') return '&amp;';
                    if (m === '<') return '&lt;';
                    if (m === '>') return '&gt;';
                    return m;
                });
            }

            // Инициализация и кнопки
            function init() {
                renderTabsAndOptions();
                renderEstimate();
                const resetBtn = document.getElementById('resetBtn');
                if (resetBtn) resetBtn.addEventListener('click', resetAll);
                const exportBtn = document.getElementById('exportBtn');
                if (exportBtn) exportBtn.addEventListener('click', exportEstimate);
            }

            init();
        })();