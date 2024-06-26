const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all properties
async function fetchProperties() {
  try {
    // handle the case where domain is not yet available
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

//fetch single property
async function fetchProperty(id) {
  try {
    // handle the case where domain is not yet available
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
