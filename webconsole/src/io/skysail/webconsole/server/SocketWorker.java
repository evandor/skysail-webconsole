package io.skysail.webconsole.server;

import java.io.IOException;

import fi.iki.elonen.NanoWSD;
import fi.iki.elonen.NanoWSD.WebSocketFrame.CloseCode;
import lombok.Getter;

public class SocketWorker extends NanoWSD {

	@Getter
	private WebSocket webSocket;

	public SocketWorker(int port) {
		super(port);
	}

	public SocketWorker(String hostname, int port) {
		super(hostname, port);
	}

	@Override
	protected WebSocket openWebSocket(IHTTPSession handshake) {
		System.out.println(handshake);
		webSocket = new WebSocket(handshake) {

			@Override
			protected void onPong(WebSocketFrame pong) {
				System.out.println("Pong " + pong);
			}

			@Override
			protected void onOpen() {
				System.out.println("onOpen");
			}

			@Override
			protected void onMessage(WebSocketFrame message) {
				System.out.println("Message: " + message);
			}

			@Override
			protected void onException(IOException exception) {
				System.out.println(exception);
			}

			@Override
			protected void onClose(CloseCode code, String reason, boolean initiatedByRemote) {
				System.out.println(code);
			}
		};
		return webSocket;
	}

}
