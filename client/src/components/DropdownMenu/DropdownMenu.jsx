export default function DropdownMenu ({ children, displayMenu }) {
  return (<>
    { <div className={displayMenu ? 'nav-menu' : 'ocult'}>
        <nav>
          <ul>
            {children}
          </ul>
        </nav>
      </div> }
      </>
  );
}
