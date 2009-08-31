JsHamcrest.Integration.screwunit();
Screw.Matchers.mock = JsMockito.mock;
Screw.Matchers.mockFunction = JsMockito.mockFunction;
Screw.Matchers.when = JsMockito.when;
Screw.Matchers.verify = JsMockito.verify;
Screw.Matchers.verifyZeroInteractions = JsMockito.verifyZeroInteractions;
Screw.Matchers.never = JsMockito.verifiers.never;

Screw.Matchers.throwsMessage = function(exceptionText) {
  return new JsHamcrest.SimpleMatcher({
    matches: function(actualFunction) {
      try {
        actualFunction();
      } catch (e) {
        if (JsHamcrest.Matchers.equalTo(exceptionText).matches(e)) {
          return true;
        } else {
          throw e;
        }
      }
      return false;
    },

    describeTo: function(description) {
      description.append('throws "').append(exceptionText).append('"');
    }
  });
}
