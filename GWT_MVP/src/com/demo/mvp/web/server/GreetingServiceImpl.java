package com.demo.mvp.web.server;

import com.demo.mvp.web.client.GreetingService;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class GreetingServiceImpl extends RemoteServiceServlet implements
		GreetingService {

	@Override
	public String getQuote() throws IllegalArgumentException {
		return "test";
	}
	
	
}
