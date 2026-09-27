import type { NavigationItem } from '../app/navigation';

interface PlaceholderViewProps {
  readonly item: NavigationItem;
}

export function PlaceholderView({ item }: PlaceholderViewProps) {
  return (
    <>
      <section className="view-introduction" aria-labelledby="view-title">
        <p className="eyebrow">{item.eyebrow}</p>
        <h2 id="view-title">{item.label}</h2>
        <p className="view-introduction__description">{item.description}</p>
        <div className="foundation-notice" role="note">
          <p className="foundation-notice__label">Foundation preview</p>
          <p>
            This screen is a navigation placeholder. It does not save printer
            details or calculate maintenance status.
          </p>
        </div>
      </section>

      <section className="foundation-grid" aria-labelledby="foundation-title">
        <div className="foundation-grid__heading">
          <p className="eyebrow">Application foundation</p>
          <h2 id="foundation-title">Ready for the approved workflows</h2>
        </div>

        <article className="foundation-card">
          <p className="foundation-card__number" aria-hidden="true">
            01
          </p>
          <h3>Purpose-built structure</h3>
          <p>
            A focused application shell keeps navigation clear without imitating
            a spreadsheet.
          </p>
        </article>

        <article className="foundation-card">
          <p className="foundation-card__number" aria-hidden="true">
            02
          </p>
          <h3>Responsive from the start</h3>
          <p>
            The layout adapts across desktop, tablet, and narrow screens while
            preserving readable controls.
          </p>
        </article>

        <article className="foundation-card">
          <p className="foundation-card__number" aria-hidden="true">
            03
          </p>
          <h3>Accessible controls</h3>
          <p>
            Semantic landmarks, text labels, keyboard controls, and visible focus
            support dependable navigation.
          </p>
        </article>
      </section>
    </>
  );
}
