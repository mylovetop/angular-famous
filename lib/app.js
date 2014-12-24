/**
 * Created by zdsoft on 14-12-24.
 */
angular.module('siteApp',[
  'famous.angular',
  'ui.router',
  Constant.CONTROLLER])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/lock-screen");
    $stateProvider
      .state("lock-screen", {
        url: "/lock-screen",
        templateUrl: "view/lock-screen.html"
      })
      .state("animate", {
        url: "/animate",
        templateUrl: "view/animate.html",
        controller: "AnimateCtrl"
      })
      .state("animations", {
        url: "/animations",
        templateUrl: "view/animations.html",
        controller: "AnimationsCtrl"
      })
      .state("container-surface", {
        url: "/container-surface",
        templateUrl: "view/container-surface.html",
        controller: "ContainerSurfaceCtrl"
      })
      .state("cuboid", {
        url: "/cuboid",
        templateUrl: "view/cuboid.html",
        controller: "CuboidCtrl"
      })
      .state("cuboid-field", {
        url: "/cuboid-field",
        templateUrl: "view/cuboid-field.html",
        controller: "CuboidFieldCtrl"
      })
      .state("draggable", {
        url: "/draggable",
        templateUrl: "view/draggable.html",
        controller: "DraggableCtrl"
      })
      .state("transitionables", {
        url: "/transitionables",
        templateUrl: "view/transitionables.html",
        controller: "TransitionablesCtrl"
      })
      .state("demo", {
        url: "/demo",
        templateUrl: "view/demo.html"
      })
      .state("physics", {
        controller: "PhysicsCtrl",
        url: "/physics",
        templateUrl: "view/physics.html"
      })
      .state("physics-particles", {
        controller: "PhysicsParticlesCtrl",
        url: "/physics-particles",
        templateUrl: "view/physics-particles.html"
      })
      .state("ng-class", {
        url: "/ng-class",
        templateUrl: "view/ng-class.html",
        controller: "NgClassCtrl"
      })
      .state("render-node", {
        url: "/render-node",
        templateUrl: "view/render-node.html",
        controller: "RenderNodeCtrl"
      })
      .state("header-footer-layout", {
        url: "/header-footer-layout",
        templateUrl: "view/header-footer-layout.html",
        controller: "HeaderFooterLayoutCtrl"
      })
      .state("grid-layout", {
        url: "/grid-layout",
        templateUrl: "view/grid-layout.html",
        controller: "GridLayoutCtrl"
      })
      .state("nested-scroll-view", {
        url: "/nested-scroll-view",
        templateUrl: "view/nested-scroll-view.html",
        controller: "NestedScrollViewCtrl"
      })
      .state("perspective", {
        url: "/perspective",
        templateUrl: "view/perspective.html",
        controller: "PerspectiveCtrl"
      })
      .state("flexible-layout", {
        url: "/flexible-layout",
        templateUrl: "view/flexible-layout.html",
        controller: "FlexibleLayoutCtrl"
      })
      .state("flipper", {
        url: "/flipper",
        templateUrl: "view/flipper.html",
        controller: "FlipperCtrl"
      });

  });