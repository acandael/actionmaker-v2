const contactImage = new Proxy({"src":"/_astro/about-us.Bbkrczbp.jpg","width":616,"height":462,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/about-us.jpg";
							}
							
							return target[name];
						}
					});

export { contactImage as c };
