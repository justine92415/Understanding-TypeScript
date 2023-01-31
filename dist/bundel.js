/******/ (() => {
    // webpackBootstrap
    /******/ 'use strict';
    /******/ var __webpack_modules__ = {
        /***/ './src/components/base-component.ts':
            /*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ Component,
                        /* harmony export */
                    }
                );
                class Component {
                    constructor(
                        templateId,
                        hostElement,
                        insertAtStart,
                        newElementId
                    ) {
                        this.templateElement =
                            document.getElementById(templateId);
                        this.hostElement = document.getElementById(hostElement);
                        const importNode = document.importNode(
                            this.templateElement.content,
                            true
                        );
                        this.element = importNode.firstElementChild;
                        if (newElementId) {
                            this.element.id = newElementId;
                        }
                        this.attach(insertAtStart);
                    }
                    attach(insertAtBeginning) {
                        this.hostElement.insertAdjacentElement(
                            insertAtBeginning ? 'afterbegin' : 'beforeend',
                            this.element
                        );
                    }
                }

                /***/
            },

        /***/ './src/components/project-input.ts':
            /*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ ProjectInput: () =>
                            /* binding */ ProjectInput,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../components/base-component */ './src/components/base-component.ts'
                    );
                /* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../util/validation */ './src/util/validation.ts'
                    );
                /* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../decorators/autobind */ './src/decorators/autobind.ts'
                    );
                /* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../state/project-state */ './src/state/project-state.ts'
                    );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };

                class ProjectInput extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                ] {
                    constructor() {
                        super('project-input', 'app', true, 'user-input');
                        this.titleInputElement =
                            this.element.querySelector('#title');
                        this.descriptionInputElement =
                            this.element.querySelector('#description');
                        this.peopleInputElement =
                            this.element.querySelector('#people');
                        this.configure();
                    }
                    configure() {
                        this.element.addEventListener(
                            'submit',
                            this.submitHandler
                        );
                    }
                    getherUserInput() {
                        const enteredTitle = this.titleInputElement.value;
                        const enteredDescription =
                            this.descriptionInputElement.value;
                        const enteredPeople = this.peopleInputElement.value;
                        const titleValidatable = {
                            value: enteredTitle,
                            required: true,
                        };
                        const descriptionValidatable = {
                            value: enteredDescription,
                            required: true,
                            minLength: 5,
                        };
                        const peopleValidatable = {
                            value: +enteredPeople,
                            required: true,
                            min: 1,
                            max: 5,
                        };
                        if (
                            !_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate(
                                titleValidatable
                            ) ||
                            !_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate(
                                descriptionValidatable
                            ) ||
                            !_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate(
                                peopleValidatable
                            )
                        ) {
                            alert('Invalid input, please try again!');
                            return;
                        } else {
                            return [
                                enteredTitle,
                                enteredDescription,
                                +enteredPeople,
                            ];
                        }
                    }
                    clearInput() {
                        this.element.reset();
                    }
                    submitHandler(event) {
                        event.preventDefault();
                        const userInput = this.getherUserInput();
                        if (Array.isArray(userInput)) {
                            const [title, desc, people] = userInput;
                            console.log(title, desc, people);
                            _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addProject(
                                title,
                                desc,
                                people
                            );
                            this.clearInput();
                        }
                    }
                    renderContent() {}
                }
                __decorate(
                    [
                        _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autobind,
                    ],
                    ProjectInput.prototype,
                    'submitHandler',
                    null
                );

                /***/
            },

        /***/ './src/components/project-item.ts':
            /*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ ProjectItem: () =>
                            /* binding */ ProjectItem,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../components/base-component */ './src/components/base-component.ts'
                    );
                /* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../decorators/autobind */ './src/decorators/autobind.ts'
                    );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };

                class ProjectItem extends _components_base_component__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                ] {
                    get persons() {
                        if (this.project.people === 1) {
                            return '1 person';
                        } else {
                            return `${this.project.people} persons`;
                        }
                    }
                    constructor(hostId, project) {
                        super('single-project', hostId, false, project.id);
                        this.project = project;
                        this.configure();
                        this.renderContent();
                    }
                    dragStartHandler(event) {
                        event.dataTransfer.setData(
                            'text/plain',
                            this.project.id
                        );
                        event.dataTransfer.effectAllowed = 'move';
                    }
                    dragEndHandler(_) {
                        console.log('DragEnd');
                    }
                    configure() {
                        this.element.addEventListener(
                            'dragstart',
                            this.dragStartHandler
                        );
                        this.element.addEventListener(
                            'dragend',
                            this.dragEndHandler
                        );
                    }
                    renderContent() {
                        this.element.querySelector('h2').textContent =
                            this.project.title;
                        this.element.querySelector('h3').textContent =
                            this.persons + ' assigned';
                        this.element.querySelector('p').textContent =
                            this.project.description;
                    }
                }
                __decorate(
                    [
                        _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.autobind,
                    ],
                    ProjectItem.prototype,
                    'dragStartHandler',
                    null
                );

                /***/
            },

        /***/ './src/components/project-list.ts':
            /*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ ProjectList: () =>
                            /* binding */ ProjectList,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../models/project */ './src/models/project.ts'
                    );
                /* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../decorators/autobind */ './src/decorators/autobind.ts'
                    );
                /* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../state/project-state */ './src/state/project-state.ts'
                    );
                /* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../components/base-component */ './src/components/base-component.ts'
                    );
                /* harmony import */ var _components_project_item__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ../components/project-item */ './src/components/project-item.ts'
                    );
                var __decorate =
                    (undefined && undefined.__decorate) ||
                    function (decorators, target, key, desc) {
                        var c = arguments.length,
                            r =
                                c < 3
                                    ? target
                                    : desc === null
                                    ? (desc = Object.getOwnPropertyDescriptor(
                                          target,
                                          key
                                      ))
                                    : desc,
                            d;
                        if (
                            typeof Reflect === 'object' &&
                            typeof Reflect.decorate === 'function'
                        )
                            r = Reflect.decorate(decorators, target, key, desc);
                        else
                            for (var i = decorators.length - 1; i >= 0; i--)
                                if ((d = decorators[i]))
                                    r =
                                        (c < 3
                                            ? d(r)
                                            : c > 3
                                            ? d(target, key, r)
                                            : d(target, key)) || r;
                        return (
                            c > 3 && r && Object.defineProperty(target, key, r),
                            r
                        );
                    };

                class ProjectList extends _components_base_component__WEBPACK_IMPORTED_MODULE_3__[
                    'default'
                ] {
                    constructor(type) {
                        super('project-list', 'app', false, `${type}-projects`);
                        this.type = type;
                        this.assignedProjects = [];
                        this.configure();
                        this.renderContent();
                    }
                    dragOverHandler(event) {
                        if (
                            event.dataTransfer &&
                            event.dataTransfer.types[0] === 'text/plain'
                        ) {
                            event.preventDefault();
                            const listEl = this.element.querySelector('ul');
                            listEl.classList.add('droppable');
                        }
                    }
                    dragLeaveHandler(_) {
                        const listEl = this.element.querySelector('ul');
                        listEl.classList.remove('droppable');
                    }
                    dropHandler(event) {
                        const prjId = event.dataTransfer.getData('text/plain');
                        _state_project_state__WEBPACK_IMPORTED_MODULE_2__.projectState.moveProject(
                            prjId,
                            this.type === 'active'
                                ? _models_project__WEBPACK_IMPORTED_MODULE_0__
                                      .ProjectStatus.Active
                                : _models_project__WEBPACK_IMPORTED_MODULE_0__
                                      .ProjectStatus.Finished
                        );
                    }
                    configure() {
                        this.element.addEventListener(
                            'dragover',
                            this.dragOverHandler
                        );
                        this.element.addEventListener(
                            'dragleave',
                            this.dragLeaveHandler
                        );
                        this.element.addEventListener('drop', this.dropHandler);
                        _state_project_state__WEBPACK_IMPORTED_MODULE_2__.projectState.addListener(
                            (projects) => {
                                const relevanProjects = projects.filter(
                                    (prj) => {
                                        if (this.type === 'active') {
                                            return (
                                                prj.status ===
                                                _models_project__WEBPACK_IMPORTED_MODULE_0__
                                                    .ProjectStatus.Active
                                            );
                                        }
                                        return (
                                            prj.status ===
                                            _models_project__WEBPACK_IMPORTED_MODULE_0__
                                                .ProjectStatus.Finished
                                        );
                                    }
                                );
                                this.assignedProjects = relevanProjects;
                                this.renderProjects();
                            }
                        );
                    }
                    renderContent() {
                        const listId = `${this.type}-projects-list`;
                        this.element.querySelector('ul').id = listId;
                        this.element.querySelector('h2').textContent =
                            this.type.toUpperCase() + 'PROJECTS';
                    }
                    renderProjects() {
                        const listEl = document.getElementById(
                            `${this.type}-projects-list`
                        );
                        listEl.innerHTML = '';
                        for (const prjItem of this.assignedProjects) {
                            new _components_project_item__WEBPACK_IMPORTED_MODULE_4__.ProjectItem(
                                this.element.querySelector('ul').id,
                                prjItem
                            );
                        }
                    }
                }
                __decorate(
                    [
                        _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.autobind,
                    ],
                    ProjectList.prototype,
                    'dragOverHandler',
                    null
                );
                __decorate(
                    [
                        _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.autobind,
                    ],
                    ProjectList.prototype,
                    'dragLeaveHandler',
                    null
                );
                __decorate(
                    [
                        _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.autobind,
                    ],
                    ProjectList.prototype,
                    'dropHandler',
                    null
                );

                /***/
            },

        /***/ './src/decorators/autobind.ts':
            /*!************************************!*\
  !*** ./src/decorators/autobind.ts ***!
  \************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ autobind: () =>
                            /* binding */ autobind,
                        /* harmony export */
                    }
                );
                function autobind(_, _2, descriptor) {
                    const originalMethod = descriptor.value;
                    const adjDescriptor = {
                        configurable: true,
                        get() {
                            const boundFn = originalMethod.bind(this);
                            return boundFn;
                        },
                    };
                    return adjDescriptor;
                }

                /***/
            },

        /***/ './src/models/project.ts':
            /*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Project: () =>
                            /* binding */ Project,
                        /* harmony export */ ProjectStatus: () =>
                            /* binding */ ProjectStatus,
                        /* harmony export */
                    }
                );
                var ProjectStatus;
                (function (ProjectStatus) {
                    ProjectStatus[(ProjectStatus['Active'] = 0)] = 'Active';
                    ProjectStatus[(ProjectStatus['Finished'] = 1)] = 'Finished';
                })(ProjectStatus || (ProjectStatus = {}));
                class Project {
                    constructor(id, title, description, people, status) {
                        this.id = id;
                        this.title = title;
                        this.description = description;
                        this.people = people;
                        this.status = status;
                    }
                }

                /***/
            },

        /***/ './src/state/project-state.ts':
            /*!************************************!*\
  !*** ./src/state/project-state.ts ***!
  \************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ ProjectState: () =>
                            /* binding */ ProjectState,
                        /* harmony export */ projectState: () =>
                            /* binding */ projectState,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../models/project */ './src/models/project.ts'
                    );

                class State {
                    constructor() {
                        this.listeners = [];
                    }
                    addListener(listenerFn) {
                        this.listeners.push(listenerFn);
                    }
                }
                class ProjectState extends State {
                    constructor() {
                        super();
                        this.projects = [];
                    }
                    static getInstance() {
                        if (this.instance) {
                            return this.instance;
                        }
                        this.instance = new ProjectState();
                        return this.instance;
                    }
                    addProject(title, description, numOfPeople) {
                        const newProject =
                            new _models_project__WEBPACK_IMPORTED_MODULE_0__.Project(
                                Math.random().toString(),
                                title,
                                description,
                                numOfPeople,
                                _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active
                            );
                        this.projects.push(newProject);
                        this.updateListeners();
                    }
                    moveProject(projectId, newStatus) {
                        const project = this.projects.find(
                            (prj) => prj.id === projectId
                        );
                        if (project && project.status !== newStatus) {
                            project.status = newStatus;
                            this.updateListeners();
                        }
                    }
                    updateListeners() {
                        for (const listenerFn of this.listeners) {
                            listenerFn(this.projects.slice());
                        }
                    }
                }
                const projectState = ProjectState.getInstance();

                /***/
            },

        /***/ './src/util/validation.ts':
            /*!********************************!*\
  !*** ./src/util/validation.ts ***!
  \********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ validate: () =>
                            /* binding */ validate,
                        /* harmony export */
                    }
                );
                function validate(validatableInput) {
                    var _a;
                    let isValid = true;
                    if (validatableInput.required) {
                        isValid =
                            isValid &&
                            ((_a = validatableInput.value) === null ||
                            _a === void 0
                                ? void 0
                                : _a.toString().trim().length) !== 0;
                    }
                    if (
                        validatableInput.minLength != null &&
                        typeof validatableInput.value === 'string'
                    ) {
                        isValid =
                            isValid &&
                            validatableInput.value.length >=
                                validatableInput.minLength;
                    }
                    if (
                        validatableInput.maxLength != null &&
                        typeof validatableInput.value === 'string'
                    ) {
                        isValid =
                            isValid &&
                            validatableInput.value.length <=
                                validatableInput.maxLength;
                    }
                    if (
                        validatableInput.min != null &&
                        typeof validatableInput.value === 'number'
                    ) {
                        isValid =
                            isValid &&
                            validatableInput.value >= validatableInput.min;
                    }
                    if (
                        validatableInput.max != null &&
                        typeof validatableInput.value === 'number'
                    ) {
                        isValid =
                            isValid &&
                            validatableInput.value <= validatableInput.max;
                    }
                    return isValid;
                }

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](
            module,
            module.exports,
            __webpack_require__
        );
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (
                    __webpack_require__.o(definition, key) &&
                    !__webpack_require__.o(exports, key)
                ) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key],
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) =>
            Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module',
                });
                /******/
            }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true,
            });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        /*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
                /*! ./components/project-input */ './src/components/project-input.ts'
            );
        /* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
                /*! ./components/project-list */ './src/components/project-list.ts'
            );

        const prjInput =
            new _components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();
        const activePrjList =
            new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList(
                'active'
            );
        const finishedPrjList =
            new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList(
                'finished'
            );
        console.log('haha');
    })();

    /******/
})();
