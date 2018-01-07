"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var disableCache = exports.disableCache = function disableCache(client) {
    var apolloQuery = client.query.bind(client);
    client.query = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return client.cache.reset();

                    case 2:
                        return _context.abrupt("return", apolloQuery.apply(undefined, _args));

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));
    return client;
};
