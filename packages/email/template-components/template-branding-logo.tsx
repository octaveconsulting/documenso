import { Img, Link } from '../components';
import { useBranding } from '../providers/branding';
import { getSafeBrandingUrl } from '../utils/branding-url';

export type TemplateBrandingLogoProps = {
  assetBaseUrl?: string;
  className?: string;
};

export const TemplateBrandingLogo = ({
  className = 'mb-6',
}: TemplateBrandingLogoProps) => {
  const branding = useBranding();
  const hasCustomBrandingLogo = branding.brandingEnabled && Boolean(branding.brandingLogo);

  // Logo SIGNATURE : 240x40 px (Retina 480x80 px)
  const logoImage = (
    <Img
      src={
        hasCustomBrandingLogo
          ? branding.brandingLogo
          : 'https://sign.octave.consulting/signature.png'
      }
      alt="Signature"
      width="240"
      height="40"
      className={className}
      style={{
        display: 'block',
        width: '240px',
        maxWidth: '100%',
        height: 'auto',
        aspectRatio: '240 / 40',
        objectFit: 'contain',
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
      }}
    />
  );

  const targetUrl = hasCustomBrandingLogo
    ? getSafeBrandingUrl(branding.brandingUrl)
    : 'https://sign.octave.consulting';

  if (!targetUrl) {
    return logoImage;
  }

  return (
    <Link href={targetUrl} target="_blank">
      {logoImage}
    </Link>
  );
};

export default TemplateBrandingLogo;
