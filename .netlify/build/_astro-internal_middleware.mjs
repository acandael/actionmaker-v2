import 'es-module-lexer';
import './chunks/shared_9gEenf6c.mjs';
import { appendForwardSlash, removeTrailingForwardSlash } from '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as originPathnameSymbol, A as AstroError, F as ForbiddenRewrite } from './chunks/astro/server_JEKMtsuq.mjs';
import 'clsx';
import 'cookie';
import 'html-escaper';

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function setOriginPathname(request, pathname, trailingSlash, buildFormat) {
  if (!pathname) {
    pathname = "/";
  }
  const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
  let finalPathname;
  if (pathname === "/") {
    finalPathname = "/";
  } else if (shouldAppendSlash) {
    finalPathname = appendForwardSlash(pathname);
  } else {
    finalPathname = removeTrailingForwardSlash(pathname);
  }
  Reflect.set(request, originPathnameSymbol, encodeURIComponent(finalPathname));
}

function getParams(route, pathname) {
  if (!route.params.length) return {};
  const paramsMatch = route.pattern.exec(pathname) || route.fallbackRoutes.map((fallbackRoute) => fallbackRoute.pattern.exec(pathname)).find((x) => x);
  if (!paramsMatch) return {};
  const params = {};
  route.params.forEach((key, i) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
    } else {
      params[key] = paramsMatch[i + 1];
    }
  });
  return params;
}

const apiContextRoutesSymbol = Symbol.for("context.routes");

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    return defineMiddleware((_context, next) => {
      return next();
    });
  }
  return defineMiddleware((context, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async (payload) => {
        if (i < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request) {
              newRequest = payload;
            } else if (payload instanceof URL) {
              newRequest = new Request(payload, handleContext.request.clone());
            } else {
              newRequest = new Request(
                new URL(payload, handleContext.url.origin),
                handleContext.request.clone()
              );
            }
            const oldPathname = handleContext.url.pathname;
            const pipeline = Reflect.get(handleContext, apiContextRoutesSymbol);
            const { routeData, pathname } = await pipeline.tryRewrite(
              payload,
              handleContext.request
            );
            if (pipeline.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) {
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(
                  handleContext.url.pathname,
                  pathname,
                  routeData.component
                ),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            }
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.params = getParams(routeData, pathname);
            handleContext.routePattern = routeData.route;
            setOriginPathname(
              handleContext.request,
              oldPathname,
              pipeline.manifest.trailingSlash,
              pipeline.manifest.buildFormat
            );
          }
          return applyHandle(i + 1, handleContext);
        } else {
          return next(payload ?? carriedPayload);
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

/**
 * Custom middleware to handle structured data
 */

// Create a middleware to handle JSON-LD injection
const onRequest$1 = defineMiddleware(async (context, next) => {
  // Extract the path segments to identify the activity page
  const pathParts = context.url.pathname.split('/').filter((part) => part.length > 0);
  const isActivityPage = pathParts.includes('teambuildings');
  const activitySlug = isActivityPage ? pathParts[pathParts.length - 1] : null;
  const isLanguagePrefixed = pathParts.length > 1 && ['en', 'fr', 'nl'].includes(pathParts[0]);
  const isApiRoute = pathParts.length > 0 && pathParts[0] === 'api';

  // Helper function to fix thumbnailUrl in JSON-LD objects
  const fixThumbnailUrl = (jsonLdObject, slug) => {
    if (jsonLdObject && jsonLdObject.thumbnailUrl) {
      // Check if the URL is a local development URL
      if (
        jsonLdObject.thumbnailUrl.includes('localhost') ||
        jsonLdObject.thumbnailUrl.includes('@fs') ||
        jsonLdObject.thumbnailUrl === 'https://actionmaker.be/logo.png'
      ) {
        console.log('🔄 FIXING INVALID THUMBNAIL URL:', jsonLdObject.thumbnailUrl);
        // Replace with a production URL
        jsonLdObject.thumbnailUrl = `https://actionmaker.be/images/activities/${slug}/${slug}-1.jpg`;
        console.log('✅ FIXED THUMBNAIL URL:', jsonLdObject.thumbnailUrl);
      }
    }
    return jsonLdObject;
  };

  // Prepare JSON-LD data for all activity pages
  if (isActivityPage && activitySlug !== 'teambuildings') {
    // Store the activity slug for later use
    context.locals.activitySlug = activitySlug;

    // We'll use the activity slug to create a dynamic JSON-LD
    // The actual content will be fetched in the page component
    // and passed to the middleware via locals

    // For now, we'll create a basic structure that will be enhanced
    // with actual data from the content collection in the page component
    const defaultJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: `Activity: ${activitySlug}`, // Will be replaced with actual title
      description: 'Activity description', // Will be replaced with actual description
      uploadDate: new Date().toISOString().split('T')[0],
      embedUrl: '', // Will be replaced with actual video URL
      thumbnailUrl: 'https://actionmaker.be/logo.png', // Will be replaced with actual thumbnail
      duration: 'PT1H30M',
      contentUrl: `https://actionmaker.be/videos/${activitySlug}.mp4`,
      publisher: {
        '@type': 'Organization',
        name: 'Action Maker',
        logo: {
          '@type': 'ImageObject',
          url: 'https://actionmaker.be/logo.png',
        },
      },
    };

    // Store in locals for use in the page
    context.locals.jsonld = JSON.stringify(defaultJsonLd);
    context.locals.hasJsonLD = true;

    // For language-prefixed routes, ensure the layout knows about the JSON-LD
    if (isLanguagePrefixed) {
      console.log('🔍 SETTING LAYOUT DATA FOR LANGUAGE ROUTE:', {
        activitySlug,
        hasJsonLD: true,
        jsonldLength: context.locals.jsonld.length,
      });

      // Set the layoutData property to ensure the layout knows about the JSON-LD
      context.locals.layoutData = {
        hasJsonLD: true,
        jsonldLength: context.locals.jsonld.length,
        jsonld: context.locals.jsonld, // Pass the actual JSON-LD data
      };
    }
  }

  console.log('🔍 URL ANALYSIS:', {
    path: context.url.pathname,
    pathParts,
    isActivity: isActivityPage,
    slug: activitySlug,
    isLanguagePrefixed,
    isApiRoute,
  });

  // Store for debugging
  context.locals.originalUrl = context.url.pathname;
  context.locals.activitySlug = activitySlug;

  console.log('🚀 MIDDLEWARE PROCESSING:', {
    url: context.url.pathname,
    hasLocals: !!context.locals,
    isActivityPage,
    isLanguagePrefixed,
    isApiRoute,
  });

  // Call the next middleware (including i18n)
  const response = await next();

  // Skip HTML processing for API routes
  if (isApiRoute) {
    console.log('🔄 API ROUTE DETECTED, SKIPPING HTML PROCESSING');
    return response;
  }

  // Special handling for activity pages - both with language prefix and without
  if (isActivityPage) {
    console.log('🔎 PROCESSING ACTIVITY PAGE:', {
      slug: activitySlug,
      isLanguagePrefixed,
    });

    const html = await response.text();

    // More robust check for JSON-LD presence
    const hasJsonLd =
      html.includes('<script type="application/ld+json"') ||
      html.includes("<script type='application/ld+json'");

    console.log('🔎 MIDDLEWARE HTML CHECK:', {
      hasJsonLD: hasJsonLd,
      headExists: html.includes('</head>'),
      htmlLength: html.length,
      hasLocalsJsonLd: !!context.locals.jsonld,
      hasLayoutData: !!context.locals.layoutData,
    });

    // Fix existing JSON-LD if present
    if (hasJsonLd) {
      console.log('🔄 FIXING EXISTING JSON-LD');

      // Find the JSON-LD script
      const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
      const match = html.match(jsonLdRegex);

      if (match && match[1]) {
        try {
          // Parse the JSON-LD
          const jsonLdObject = JSON.parse(match[1]);

          // Fix the thumbnailUrl
          fixThumbnailUrl(jsonLdObject, activitySlug);

          // Replace the JSON-LD in the HTML
          const fixedJsonLd = JSON.stringify(jsonLdObject, null, 2);
          const fixedHtml = html.replace(
            jsonLdRegex,
            `<script type="application/ld+json">${fixedJsonLd}</script>`
          );

          console.log('✅ FIXED EXISTING JSON-LD');

          // Return the modified response
          return new Response(fixedHtml, {
            status: response.status,
            headers: response.headers,
          });
        } catch (error) {
          console.error('❌ ERROR FIXING JSON-LD:', error);
        }
      }
    }

    // For language-prefixed routes, inject JSON-LD if not present
    if (
      isLanguagePrefixed &&
      response.headers.get('content-type')?.includes('text/html') &&
      !hasJsonLd &&
      html.includes('</head>')
    ) {
      console.log('⚙️ MIDDLEWARE INJECTING JSON-LD FOR LANGUAGE ROUTE:', activitySlug);
      console.log('⚙️ MIDDLEWARE LOCALS:', {
        hasJsonld: !!context.locals.jsonld,
        jsonldLength: context.locals.jsonld ? context.locals.jsonld.length : 0,
        jsonldPreview: context.locals.jsonld
          ? context.locals.jsonld.substring(0, 100) + '...'
          : 'none',
      });

      // Create a properly formatted JSON-LD for language routes with proper indentation and line breaks
      const jsonLdObject = JSON.parse(context.locals.jsonld || '{}');

      // If the JSON-LD is using placeholder values, try to update them with actual activity data
      if (
        jsonLdObject.name === `Activity: ${activitySlug}` &&
        jsonLdObject.description === 'Activity description'
      ) {
        // Extract title and description from HTML meta tags
        const titleMatch = html.match(/<title>(.*?)<\/title>/);
        const descriptionMatch = html.match(/<meta name="description" content="(.*?)"/);
        const videoUrlMatch = html.match(/video-url["']:\s*["'](.*?)["']/);

        if (titleMatch && titleMatch[1]) {
          jsonLdObject.name = titleMatch[1].replace(' - Action Maker', '');
        }

        if (descriptionMatch && descriptionMatch[1]) {
          jsonLdObject.description = descriptionMatch[1];
        }

        if (videoUrlMatch && videoUrlMatch[1]) {
          jsonLdObject.embedUrl = videoUrlMatch[1];
        }

        // Fix thumbnailUrl if it's using a local development URL
        fixThumbnailUrl(jsonLdObject, activitySlug);

        console.log('🔄 MIDDLEWARE UPDATED JSON-LD WITH PAGE DATA:', {
          name: jsonLdObject.name,
          description: jsonLdObject.description.substring(0, 50) + '...',
          embedUrl: jsonLdObject.embedUrl,
        });
      }

      // Format with proper indentation and line breaks
      const jsonLdScript = `
<script type="application/ld+json">
${JSON.stringify(jsonLdObject, null, 2)}
</script>`;

      // Insert JSON-LD before closing head tag with proper spacing
      let modifiedHtml = html.replace('</head>', `${jsonLdScript}\n</head>`);

      console.log('✅ MIDDLEWARE INJECTION COMPLETE FOR LANGUAGE ROUTE');

      // Return the modified response
      return new Response(modifiedHtml, {
        status: response.status,
        headers: response.headers,
      });
    }
    // Only inject if needed (HTML content, no JSON-LD yet)
    else if (
      response.headers.get('content-type')?.includes('text/html') &&
      !hasJsonLd &&
      context.locals.jsonld
    ) {
      console.log('⚙️ MIDDLEWARE INJECTING JSON-LD FOR:', activitySlug);

      // Format the JSON-LD with proper indentation and line breaks
      const jsonLdObject = JSON.parse(context.locals.jsonld);

      // Fix thumbnailUrl if it's using a local development URL
      fixThumbnailUrl(jsonLdObject, activitySlug);

      const jsonLdScript = `
<script type="application/ld+json">
  ${JSON.stringify(jsonLdObject, null, 2)}
</script>`;

      // Insert JSON-LD before closing head tag with proper spacing
      let modifiedHtml = html;

      if (html.includes('</head>')) {
        modifiedHtml = html.replace('</head>', `${jsonLdScript}\n</head>`);
      }

      console.log('✅ MIDDLEWARE INJECTION COMPLETE');

      // Return the modified response
      return new Response(modifiedHtml, {
        status: response.status,
        headers: response.headers,
      });
    } else if (hasJsonLd) {
      console.log('✅ JSON-LD ALREADY EXISTS IN HTML');
    } else if (!context.locals.jsonld) {
      console.log('⚠️ NO JSON-LD DATA AVAILABLE FOR:', activitySlug);
    }

    // Return the original HTML response
    return new Response(html, {
      status: response.status,
      headers: response.headers,
    });
  }

  // Handle non-language-prefixed routes
  if (!isLanguagePrefixed && activitySlug) {
    console.log(
      `🔄 Middleware: Injecting JSON-LD for non-language-prefixed route: ${activitySlug}`
    );

    // We need to get the HTML content first
    const html = await response.text();

    // Skip if not HTML or no head tag
    if (!response.headers.get('content-type')?.includes('text/html') || !html.includes('</head>')) {
      return new Response(html, {
        status: response.status,
        headers: response.headers,
      });
    }

    // Create a dynamic JSON-LD object using the activity slug
    // This is a placeholder that will be replaced with actual data in the page component
    const jsonLdObject = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: `Activity: ${activitySlug}`, // Will be replaced with actual title
      description: 'Activity description', // Will be replaced with actual description
      uploadDate: new Date().toISOString().split('T')[0],
      embedUrl: '', // Will be replaced with actual video URL
      thumbnailUrl: `https://actionmaker.be/images/activities/${activitySlug}/${activitySlug}-1.jpg`, // Production-ready URL
      duration: 'PT1H30M',
      contentUrl: `https://actionmaker.be/videos/${activitySlug}.mp4`,
      publisher: {
        '@type': 'Organization',
        name: 'Action Maker',
        logo: {
          '@type': 'ImageObject',
          url: 'https://actionmaker.be/logo.png',
        },
      },
    };

    // Format the JSON-LD with proper indentation and line breaks
    const formattedJsonLd = JSON.stringify(jsonLdObject, null, 2);
    console.log('📊 Middleware: JSON-LD being injected:', formattedJsonLd);

    // Store the JSON-LD in context.locals for the layout to use
    context.locals.layoutData = {
      jsonld: formattedJsonLd,
    };

    // Inject the JSON-LD script into the HTML head
    const headEndIndex = html.indexOf('</head>');
    if (headEndIndex !== -1) {
      const scriptTag = `<script type="application/ld+json">${formattedJsonLd}</script>`;
      const modifiedHtml = html.slice(0, headEndIndex) + scriptTag + html.slice(headEndIndex);

      return new Response(modifiedHtml, {
        status: response.status,
        headers: response.headers,
      });
    }

    // If we couldn't inject, return the original response
    return new Response(html, {
      status: response.status,
      headers: response.headers,
    });
  }

  // Return the original response for all other cases
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
