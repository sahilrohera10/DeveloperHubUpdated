const express = require("express");
const DomainModel = require("../Models/DomainModel");
const baseRepo = require("../Repository/baseRepository");

module.exports = {
  AddDomain,
  GetDomain,
  DeleteDomain,
  UpdateDomain
};

async function AddDomain(req, res) {
  const body = req.body;
  try {
    const Data = await baseRepo.baseCreate(DomainModel, body);
    console.log("Data = ", Data);

    return res.status(200).json("Domain Added");
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json({ message: err });
  }
}

async function GetDomain(req, res) {
  try {
    const AllDomains = await baseRepo.baseList(DomainModel, {});
    return res.status(200).json({ AllDomains });
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json({ message: err });
  }
}

async function DeleteDomain(req, res) {
  const id = req.params.id;
  try {
    await baseRepo.baseDeleteById(DomainModel, id);
    return res.status(200).json("Domain Deleted");
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json({ message: err });
  }
}

async function UpdateDomain(req, res) {
  const body = req.body;
  const id = body.id;
  const searchParams = {
    _id: id,
  };
  try {
    await baseRepo.baseUpdate(DomainModel, searchParams, body);

    return res.status(200).json("Domain Updated");
  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json({ message: err });
  }
}
