<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# evalrational

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate a [rational function][rational-function] using double-precision floating-point arithmetic.

<section class="intro">

A [rational function][rational-function] `f(x)` is defined as

<!-- <equation class="equation" label="eq:rational_function" align="center" raw="f(x) = \frac{P(x)}{Q(x)}" alt="Rational function definition."> -->

```math
f(x) = \frac{P(x)}{Q(x)}
```

<!-- <div class="equation" align="center" data-raw-text="f(x) = \frac{P(x)}{Q(x)}" data-equation="eq:rational_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/evalrational/docs/img/equation_rational_function.svg" alt="Rational function definition.">
    <br>
</div> -->

<!-- </equation> -->

where both `P(x)` and `Q(x)` are polynomials in `x`. A [polynomial][polynomial] in `x` can be expressed

<!-- <equation class="equation" label="eq:polynomial" align="center" raw="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" alt="Polynomial expression."> -->

```math
c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i
```

<!-- <div class="equation" align="center" data-raw-text="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" data-equation="eq:polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/evalrational/docs/img/equation_polynomial.svg" alt="Polynomial expression.">
    <br>
</div> -->

<!-- </equation> -->

where `c_n, c_{n-1}, ..., c_0` are constants.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import evalrational from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalrational@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalrational@esm/index.mjs';
```

#### evalrational( P, Q, x )

Evaluates a [rational function][rational-function] at a value `x` using double-precision floating-point arithmetic.

```javascript
var P = [ -6.0, -5.0 ];
var Q = [ 3.0, 0.5 ];

var v = evalrational( P, Q, 6.0 ); // => ( -6*6^0 - 5*6^1 ) / ( 3*6^0 + 0.5*6^1 ) = (-6-30)/(3+3)
// returns -6.0
```

For polynomials of different degree, the coefficient array for the lower degree [polynomial][polynomial] should be padded with zeros.

```javascript
// 2x^3 + 4x^2 - 5x^1 - 6x^0 => degree 4
var P = [ -6.0, -5.0, 4.0, 2.0 ];

// 0.5x^1 + 3x^0 => degree 2
var Q = [ 3.0, 0.5, 0.0, 0.0 ]; // zero-padded

var v = evalrational( P, Q, 6.0 ); // => ( -6*6^0 - 5*6^1 + 4*6^2 + 2*6^3 ) / ( 3*6^0 + 0.5*6^1 + 0*6^2 + 0*6^3 ) = (-6-30+144+432)/(3+3)
// returns 90.0
```

Coefficients should be ordered in **ascending** degree, thus matching summation notation.

#### evalrational.factory( P, Q )

Uses code generation to in-line coefficients and return a function for evaluating a [rational function][rational-function] using double-precision floating-point arithmetic.

```javascript
var P = [ 20.0, 8.0, 3.0 ];
var Q = [ 10.0, 9.0, 1.0 ];

var rational = evalrational.factory( P, Q );

var v = rational( 10.0 ); // => (20*10^0 + 8*10^1 + 3*10^2) / (10*10^0 + 9*10^1 + 1*10^2) = (20+80+300)/(10+90+100)
// returns 2.0

v = rational( 2.0 ); // => (20*2^0 + 8*2^1 + 3*2^2) / (10*2^0 + 9*2^1 + 1*2^2) = (20+16+12)/(10+18+4)
// returns 1.5
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The coefficients `P` and `Q` are expected to be arrays of the **same** length.
-   For hot code paths in which coefficients are invariant, a compiled function will be more performant than `evalrational()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">
## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs';
import evalrational from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalrational@esm/index.mjs';

// Create two arrays of random coefficients...
var P = discreteUniform( 10, -100, 100 );
var Q = discreteUniform( 10, -100, 100 );

// Evaluate the rational function at random values...
var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = uniform( 0.0, 100.0 );
    console.log( 'f(%d) = %d', v, evalrational( P, Q, v ) );
}

// Generate an `evalrational` function...
var rational = evalrational.factory( P, Q );
for ( i = 0; i < 100; i++ ) {
    v = uniform( -50.0, 50.0 );
    console.log( 'f(%d) = %d', v, rational( v ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/tools/evalpoly`][@stdlib/math/base/tools/evalpoly]</span><span class="delimiter">: </span><span class="description">evaluate a polynomial.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-evalrational.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-evalrational

[test-image]: https://github.com/stdlib-js/math-base-tools-evalrational/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-tools-evalrational/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-evalrational/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-evalrational?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-evalrational.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-evalrational/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-evalrational/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-tools-evalrational/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-tools-evalrational/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-tools-evalrational/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-tools-evalrational/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-tools-evalrational/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-tools-evalrational/blob/main/branches.md

[polynomial]: https://en.wikipedia.org/wiki/Polynomial

[rational-function]: https://en.wikipedia.org/wiki/Rational_function

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

<!-- <related-links> -->

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math-base-tools-evalpoly/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
