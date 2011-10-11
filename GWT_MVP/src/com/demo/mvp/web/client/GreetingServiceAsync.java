package com.demo.mvp.web.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The async counterpart of <code>GreetingService</code>.
 */
public interface GreetingServiceAsync {
	void getQuote(AsyncCallback<String> callback)
			throws IllegalArgumentException;
}
