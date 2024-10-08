"use client";

import type { JSXElementConstructor, ReactNode } from "react";

type NoInfer<T> = [T][T extends any ? 0 : 1];

type ContainsChildren = {
	children?: ReactNode;
};

export function ProviderStack<
	Providers extends [ContainsChildren, ...ContainsChildren[]],
>({
	providers,
	children,
}: {
	providers: {
		[k in keyof Providers]: [
			JSXElementConstructor<Providers[k]>,
			Omit<NoInfer<Providers[k]>, "children">,
		];
	};
	children: ReactNode;
}) {
	let node = children;

	for (const [Provider, props] of providers) {
		node = <Provider {...props}>{node}</Provider>;
	}

	return node;
}
