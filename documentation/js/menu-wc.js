'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tp-framework-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-578eccae574051c30afa067c97a75b825ddc075aae58fd09d273e3b933b6263e8cb7a69b4df6dbae5441138766f3f391d4eeab66d0f6d8ed674fb60a1807878e"' : 'data-target="#xs-components-links-module-AppModule-578eccae574051c30afa067c97a75b825ddc075aae58fd09d273e3b933b6263e8cb7a69b4df6dbae5441138766f3f391d4eeab66d0f6d8ed674fb60a1807878e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-578eccae574051c30afa067c97a75b825ddc075aae58fd09d273e3b933b6263e8cb7a69b4df6dbae5441138766f3f391d4eeab66d0f6d8ed674fb60a1807878e"' :
                                            'id="xs-components-links-module-AppModule-578eccae574051c30afa067c97a75b825ddc075aae58fd09d273e3b933b6263e8cb7a69b4df6dbae5441138766f3f391d4eeab66d0f6d8ed674fb60a1807878e"' }>
                                            <li class="link">
                                                <a href="components/ActiveListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActiveListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchiveListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArchiveListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConnexionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConnexionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InscriptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InscriptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimpleUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleUserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-578eccae574051c30afa067c97a75b825ddc075aae58fd09d273e3b933b6263e8cb7a69b4df6dbae5441138766f3f391d4eeab66d0f6d8ed674fb60a1807878e"' : 'data-target="#xs-pipes-links-module-AppModule-578eccae574051c30afa067c97a75b825ddc075aae58fd09d273e3b933b6263e8cb7a69b4df6dbae5441138766f3f391d4eeab66d0f6d8ed674fb60a1807878e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-578eccae574051c30afa067c97a75b825ddc075aae58fd09d273e3b933b6263e8cb7a69b4df6dbae5441138766f3f391d4eeab66d0f6d8ed674fb60a1807878e"' :
                                            'id="xs-pipes-links-module-AppModule-578eccae574051c30afa067c97a75b825ddc075aae58fd09d273e3b933b6263e8cb7a69b4df6dbae5441138766f3f391d4eeab66d0f6d8ed674fb60a1807878e"' }>
                                            <li class="link">
                                                <a href="pipes/FilterActivePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterActivePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterInactivePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterInactivePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SearchInactifPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchInactifPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/InscriptionComponent-1.html" data-type="entity-link" >InscriptionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" >PageNotFoundComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/CostumerrorDirective.html" data-type="entity-link" >CostumerrorDirective</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EncryptDecryptService.html" data-type="entity-link" >EncryptDecryptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});