/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var f = factory( [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] );
	t.strictEqual( typeof f, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided two empty coefficient arrays, the returned function always returns `NaN`', function test( t ) {
	var f;
	var v;
	var i;

	f = factory( [], [] );
	for ( i = 0; i < 100; i++ ) {
		v = f( i );
		t.strictEqual( isnan( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided coefficient arrays of different lengths, the returned function always returns `NaN`', function test( t ) {
	var f1;
	var f2;
	var v;
	var i;

	f1 = factory( [ 2.0, 1.0, 2.0 ], [ 3.0, 1.0 ] );
	f2 = factory( [ 0.5, 2.0 ], [ 2.0, 3.0, 1.0 ] );

	for ( i = 0; i < 100; i++ ) {
		v = f1( i );
		t.strictEqual( isnan( v ), true, 'returns expected value' );
		v = f2( i );
		t.strictEqual( isnan( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided only one coefficient for both arrays, the returned function always returns the ratio of the two coefficients', function test( t ) {
	var f;
	var v;
	var i;

	f = factory( [2.0], [4.0] );
	for ( i = 0; i < 100; i++ ) {
		v = f( i );
		t.strictEqual( v, 0.5, 'returns expected value' );
	}
	t.end();
});

tape( 'if the value at which to evaluate a rational function is `0`, the returned function returns the ratio of the first coefficients', function test( t ) {
	var f;
	var v;

	f = factory( [ 3.0, 2.0, 1.0 ], [ 0.5, 2.0, 1.0 ] );

	v = f( 0.0 );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});

tape( 'the returned function evaluates a rational function', function test( t ) {
	var f;
	var v;

	f = factory( [ -6.0, -5.0 ], [ 3.0, 0.5 ] );

	v = f( 6.0 );
	t.strictEqual( v, -6.0, 'returns expected value' );

	v = f( 2.0 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	v = f( 0.5 ); // -8.5 / 3.25
	t.strictEqual( v, -2.6153846153846154, 'returns expected value' );

	v = f( 1.0 ); // -11 / 3.5
	t.strictEqual( v, -3.142857142857143, 'returns expected value' );

	t.end();
});

tape( 'the generated function handles large `x` values', function test( t ) {
	var v1;
	var v2;
	var f;
	var P;
	var Q;
	var x;
	var i;

	// 6x^5 + 5x^4 + 4x^3 + 3x^2 + 2x^1 + 1x^0
	P = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	// 1x^5 + 2x^4 + 3x^3 + 4x^2 + 5x^1 + 6x^0
	Q = [ 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ];

	f = factory( P, Q );

	x = 1.0e100;
	for ( i = 0; i < 1000; i++ ) {
		x *= 2.0;
		v1 = f( x );
		v2 = f( -x );
		t.strictEqual( v1, v2, 'returns expected value' );
	}
	t.end();
});

tape( 'the generated function returns analytically incorrect results for certain coefficient and `x` combinations', function test( t ) {
	var f;
	var P;
	var Q;
	var v;

	// Case 1: large negative `x`

	// 1x^2 + 1e308x^1 + 0x^0
	P = [ 0.0, 1.0e308, 1.0 ];

	// 0x^2 + 0x^2 + 1x^0
	Q = [ 1.0, 0, 0 ];

	f = factory( P, Q );

	// (-1e308)^2 + (1e308)(-1e308) = +inf - inf => indeterminate => NaN
	v = f( -1.0e308 );
	t.notOk( isnan( v ), 'returns expected value' );

	// Case 2: large positive `x`

	// 1x^2 - 1e308x^1 + 0x^0
	P = [ 0.0, -1.0e308, 1.0 ];

	// 0x^2 + 0x^2 + 1x^0
	Q = [ 1.0, 0.0, 0.0 ];

	f = factory( P, Q );

	// (1e308)^2 - (1e308)(1e308) = +inf - inf => indeterminate => NaN
	v = f( 1.0e308 );
	t.notOk( isnan( v ), 'returns expected value' );

	t.end();
});

tape( 'the returned function evaluates a rational function (large number of coefficients)', function test( t ) {
	var denom;
	var num;
	var f;
	var i;
	var P;
	var Q;
	var v;

	P = [];
	Q = [];
	num = 0;
	denom = 0;
	for ( i = 0; i < 1000; i++ ) {
		P.push( i );
		num += i;
		Q.push( i + 1 );
		denom += i + 1;
	}
	f = factory( P, Q );

	v = f( 1.0 );
	t.strictEqual( v, num / denom, 'returns expected value' );

	t.end();
});
